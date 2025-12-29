use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "blocify")]
#[command(about = "Microfrontend scaffolding tool")]
pub struct Cli {
    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    Create {
        name: String,
    },
}
