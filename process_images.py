import os

def process_images():
    output_file = "/home/ubuntu/site-receitas-bolos-pote/client/src/lib/images.ts"
    
    # Mapeamento de arquivos para prefixos de variáveis
    files = [
        ("/home/ubuntu/site-receitas-bolos-pote/temp_images_1.txt", "cremoso"),
        ("/home/ubuntu/site-receitas-bolos-pote/temp_images_2.txt", "abacaxi")
    ]
    
    with open(output_file, "w") as out:
        out.write("// Imagens extraídas dos HTMLs originais\n\n")
        
        for file_path, prefix in files:
            try:
                with open(file_path, "r") as f:
                    content = f.read()
                    # Split por src=" para pegar cada imagem
                    parts = content.split('src="')
                    count = 1
                    for part in parts:
                        if not part.strip(): continue
                        
                        # Limpar o final da string (fechamento das aspas)
                        img_data = part.split('"')[0]
                        
                        if img_data.startswith("data:image"):
                            var_name = f"img_{prefix}_{count}"
                            out.write(f"export const {var_name} = \"{img_data}\";\n\n")
                            count += 1
            except Exception as e:
                print(f"Erro ao processar {file_path}: {e}")

if __name__ == "__main__":
    process_images()
