import base64
from PIL import Image
from io import BytesIO
import os

class Imagem:
    def cadastrarImagem(self, base64_string, id, repositorio):
        try:
            if base64_string.startswith('data:image/png;base64,'):
                base64_string = base64_string[len('data:image/png;base64,'):]

            # Decodifique a string Base64
            image_data = base64.b64decode(base64_string)

            # Converta os dados decodificados em uma imagem
            image = Image.open(BytesIO(image_data))

            # Salve a imagem em um arquivo
            image.save(f"uploads/{repositorio}/{id[0]}.png")

            return True
        except FileNotFoundError as error:
            print(error)
            return error
    def converteImagem(self, id, repositorio):
        for root, dirs, files in os.walk(f'uploads/{repositorio}'):
            if str(id) + '.png' in files:
                target = os.path.join(root, str(id) + '.png')
                with Image.open(target) as image:
                    buffered = BytesIO()
                    image.save(buffered, format=image.format)
                    return base64.b64encode(buffered.getvalue()).decode('utf-8')
        return ''