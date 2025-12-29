use std::fs;
use std::path::Path;

pub fn create_microfrontend(name: &str) {
    let base = name.to_string();

    if Path::new(&base).exists() {
        eprintln!("❌ El paquete '{}' ya existe", name);
        return;
    }

    fs::create_dir_all(format!("{base}/src"))
        .expect("Error creando src");

    fs::write(
        format!("{base}/src/index.tsx"),
        index_template(name),
    ).unwrap();

    fs::write(
        format!("{base}/package.json"),
        package_json_template(name),
    ).unwrap();

    println!("✅ Microfrontend '{}' creado", name);
}

fn index_template(name: &str) -> String {
    format!(
r#"import React from "react";
import {{ View, Text }} from "react-native";

export function {name_cap}() {{
  return (
    <View>
      <Text>{name} module</Text>
    </View>
  );
}}
"#,
        name_cap = capitalize(name),
        name = name
    )
}

fn package_json_template(name: &str) -> String {
    format!(
r#"{{
  "name": "{name}",
  "version": "1.0.0",
  "private": true,
  "main": "src/index.tsx",
  "author": "Juan Hoyos",
  "scripts": {{
    "lint": "eslint . --max-warnings 0",
    "generate:component": "turbo gen react-component",
    "check-types": "tsc --noEmit"
  }},
  "devDependencies": {{
    "@repo/eslint-config": "workspace:*",
    "@repo/typescript-config": "workspace:*",
    "@types/node": "22.15.3",
    "@types/react": "19.1.0",
    "@types/react-dom": "19.1.1",
    "eslint": "9.34.0",
    "typescript": "5.9.2"
  }},
  "dependencies": {{
    "react": "19.1.0",
    "react-dom": "19.1.0"
  }}
}}
"#,
        name = name
    )
}


fn capitalize(s: &str) -> String {
    let mut c = s.chars();
    match c.next() {
        None => String::new(),
        Some(f) => f.to_uppercase().collect::<String>() + c.as_str(),
    }
}
