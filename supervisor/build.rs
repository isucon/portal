fn main() -> Result<(), Box<dyn std::error::Error>> {
    prost_build::compile_protos(
        &[
            "../proto/isuxportal/services/bench/receiving.proto",
            "../proto/isuxportal/services/bench/reporting.proto",
            "../proto/isuxportal/error.proto",
        ],
        &["../proto"],
    )?;
    Ok(())
}
