pub mod isuxportal {
    pub mod proto {
        pub mod services {
            pub mod bench {
                tonic::include_proto!("isuxportal.proto.services.bench");
            }
        }
        pub mod resources {
            tonic::include_proto!("isuxportal.proto.resources");
        }
    }
}
