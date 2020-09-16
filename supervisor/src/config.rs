fn default_hard_timeout() -> u64 {
    70
}

fn default_log_directory() -> String {
    "/tmp".to_string()
}

fn default_interval_after_empty_receive() -> u64 {
    5
}

#[derive(serde::Deserialize, Debug)]
pub struct Config {
    pub endpoint_url: String,
    pub token: String,
    pub team_id: Option<i64>,
    pub instance_name: String,
    #[serde(default = "default_log_directory")]
    pub log_directory: String,
    #[serde(default = "default_hard_timeout")]
    pub hard_timeout: u64,
    #[serde(default = "default_interval_after_empty_receive")]
    pub interval_after_empty_receive: u64,
}
