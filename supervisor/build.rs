fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure().build_server(false).compile(
        &[
            "../proto/isuxportal/services/bench/receiving.proto",
            "../proto/isuxportal/services/bench/reporting.proto",
        ],
        &["../proto"],
    )?;
    Ok(())
}
