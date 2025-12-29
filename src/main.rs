mod cli;
mod generator;

use clap::Parser;
use cli::{Cli, Commands};
use generator::microfrontend::create_microfrontend;

fn main() {
    let cli = Cli::parse();

    match cli.command {
        Commands::Create { name } => {
            create_microfrontend(&name);
        }
    }
}
