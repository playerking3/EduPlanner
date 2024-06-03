import base64
from PIL import Image
from io import BytesIO

class Image:
    def cadastrarImagem(self, base64_string, id):
        try:
            if base64_string.startswith('data:image/png;base64,'):
                base64_string = base64_string[len('data:image/png;base64,'):]

            # Decodifique a string Base64
            image_data = base64.b64decode(base64_string)

            # Converta os dados decodificados em uma imagem
            image = Image.open(BytesIO(image_data))

            # Salve a imagem em um arquivo
            image.save(f"uploads/{id}.png")

            return True
        except FileNotFoundError as error:
            print(error)
            return error