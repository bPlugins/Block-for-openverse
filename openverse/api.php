<?php

class BPOVAUTHORIZATION
{
    public function __construct()
    {
        add_action('wp_ajax_bpov_GetData', [$this, 'bpov_GetData']);
        add_action('wp_ajax_nopriv_bpov_GetData', [$this, 'bpov_GetData']);

        add_action('wp_ajax_bpov_searchData', [$this, 'bpov_searchData']);
        add_action('wp_ajax_nopriv_bpov_searchData', [$this, 'bpov_searchData']);

    }

    public function bpov_GetData()
    {
        if (!wp_verify_nonce(sanitize_text_field($_GET['nonce']), 'wp_rest')) {
            wp_die();
        }

        $email = sanitize_text_field($_GET['email']) ?? false;
        $name = sanitize_text_field($_GET['name']) ?? false;

        $unique_id = $this->unique_id($email);

        $token = $this->bpovToken($unique_id, $email, $name);
        if ($token) {
            wp_send_json_success(['accessToken' => $token]);
        }

        wp_send_json_error('something went wrong');
    }

    public function bpov_searchData()
    {
        if (!wp_verify_nonce(sanitize_text_field($_GET['nonce']), 'wp_rest')) {
            wp_die();
        }
        $email = sanitize_text_field($_GET['email'] ?? false);

        $unique_id = $this->unique_id($email);

        $token = $this->bpovToken($unique_id);
        if ($token) {
            wp_send_json_success(['accessToken' => $token]);
        }

    }

    public function bpovRegister($email, $name, $unique_id)
    {

        $client_id = get_option($unique_id . '_bpov_client_id');
        $client_secret = get_option($unique_id . '_bpov_client_secret');

        if ($client_id && $client_secret) {
            return [
                'client_id' => $client_id,
                'client_secret' => $client_secret,
            ];
        }

        try {
            $response = wp_remote_post("https://api.openverse.engineering/v1/auth_tokens/register/", [
                "method" => "POST",
                "headers" => [
                    "Content-Type" => "application/json",
                ],
                "body" => wp_json_encode(
                    [
                        "email" => $email,
                        "name" => $name,
                        "description" => "To access Openverse API",
                    ]
                ),
            ]);

            $response_body = wp_remote_retrieve_body($response);
            $response_data = json_decode($response_body);
            $client_id = $response_data->client_id;
            $client_secret = $response_data->client_secret;

            if (isset($response_data->name) && is_array($response_data->name)) {
                return wp_send_json_error(['errors' => $response_data]);
            }

            update_option($unique_id . "_bpov_client_id", $client_id);
            update_option($unique_id . "_bpov_client_secret", $client_secret);

            return [
                'client_id' => $client_id,
                'client_secret' => $client_secret,
            ];

        } catch (\Throwable $th) {
            wp_send_json_error($th->getMessage());

        }
    }

    public function bpovToken($unique_id = '', $email = '', $name = '')
    {
        $access_token = get_transient($unique_id . "_bpov_access_token");
        if ($access_token) {
            return $access_token;
        }

        $data = $this->bpovRegister($email, $name, $unique_id);

        if (!isset($data['client_id'])) {
            wp_send_json_error('error while fetching client id and client secret');
        }

        $response = wp_remote_post("https://api.openverse.engineering/v1/auth_tokens/token/", [
            "method" => "POST",
            "headers" => [
                "Content-Type" => "application/x-www-form-urlencoded",
            ],
            "body" => http_build_query(
                [
                    "grant_type" => "client_credentials",
                    "client_id" => $data['client_id'],
                    "client_secret" => $data['client_secret'],
                ]
            ),
        ]);

        $response_body = wp_remote_retrieve_body($response);
        $response_data = json_decode($response_body);

        $access_token = $response_data->access_token;
        $expire = $response_data->expires_in;
        set_transient($unique_id . "_bpov_access_token", $access_token, $expire);
        return $access_token;
    }

    public function unique_id($email)
    {
        $parts = explode('@', $email);
        return $parts[0];
    }

}
new BPOVAUTHORIZATION();

// add_action('wp_footer', function () {

//     $client_id = get_option('bpov_client_id');
//     $client_secret = get_option('bpov_client_secret');
//     echo $client_id . "" . $client_secret;
//     $response = wp_remote_post("https: //api.openverse.engineering/v1/auth_tokens/token/", [
//         "method" => "POST",
//         "headers" => [
//             "Content-Type" => "application/x-www-form-urlencoded",
//         ],
//         "body" => http_build_query(
//             [
//                 "grant_type" => "client_credentials",
//                 "client_id" => $client_id,
//                 "client_secret" => $client_secret,
//             ]
//         ),
//     ]);

//     $response_body = wp_remote_retrieve_body($response);
//     $response_data = json_decode($response_body);

//     $access_token = $response_data->access_token;
//     $expire = $response_data->expires_in;
//     set_transient("_bpov_access_token", $access_token, $expire);

//     echo $access_token . "<br/>" . $expire;

//     // echo "AlAmin";
//     // $response = wp_remote_post("https://api.openverse.engineering/v1/auth_tokens/token/", [
//     //     "method" => "POST",
//     //     "headers" => [
//     //         "Content-Type" => "application/x-www-form-urlencoded",
//     //     ],
//     //     "body" => http_build_query([
//     //         "grant_type" => "client_credentials",
//     //         "client_id" => $client_id,
//     //         "client_secret" => $client_secret,
//     //     ]),
//     // ]);

//     // $data = wp_remote_retrieve_body($response);
//     // var_dump($data);

//     // if (is_wp_error($response)) {
//     //     echo "Error: " . $response->get_error_message();
//     // } else {

//     //     $response_body = wp_remote_retrieve_body($response);
//     //     $response_data = json_decode($response_body);

//     //     if ($response_data && isset($response_data->access_token) && isset($response_data->expires_in)) {
//     //         $access_token = $response_data->access_token;
//     //         $expire = $response_data->expires_in;
//     //         echo $access_token . "<br/>" . $expire;
//     //     } else {
//     //         // Log the response body for debugging
//     //         error_log("Unexpected response format: " . $response_body);
//     //         echo "Error: Unexpected response format";
//     //     }

//     // }

//     // $response = wp_remote_post("https://api.openverse.engineering/v1/auth_tokens/register/", [
//     //     "method" => "POST",
//     //     "headers" => [
//     //         "Content-Type" => "application/json",
//     //     ],
//     //     "body" => wp_json_encode(
//     //         [
//     //             "email" => "alamincmt7418@gmail.com",
//     //             "name" => "test2alaminss1",
//     //             "description" => "To access Openverse API",
//     //         ]
//     //     ),
//     // ]);

//     // $response_body = wp_remote_retrieve_body($response);
//     // $response_data = json_decode($response_body);
//     // echo "<pre>";
//     // var_dump($response_data);
//     // echo "</pre>";

//     // $client_id = $response_data->client_id;
//     // $client_secret = $response_data->client_secret;

// });
