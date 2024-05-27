class Cpf:

    def __init__(self, cpf):
        self.cpf = cpf

    def is_cpf_valid(self):
        cpf = ''.join(filter(str.isdigit, self.cpf))

        if cpf == "":
            return False, "O campo CPF não pode estar vazio"

        if not cpf or len(cpf) != 11:
            return False, "O CPF deve ter 11 dígitos"

        if cpf == cpf[0] * 11:
            return False, "O CPF é inválido"

        soma = sum(int(cpf[j]) * (10 - j) for j in range(9))
        resto = soma % 11
        digito1 = 0 if resto < 2 else 11 - resto

        if int(cpf[9]) != digito1:
            return False, "O CPF é inválido"

        soma = sum(int(cpf[j]) * (11 - j) for j in range(10))
        resto = soma % 11
        digito2 = 0 if resto < 2 else 11 - resto

        if int(cpf[10]) != digito2:
            return False, "O CPF é inválido"

        return True, ""