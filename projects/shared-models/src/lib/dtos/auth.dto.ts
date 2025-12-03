export interface LoginDto {
  email: string;
  senha: string;
  deviceId?: string;
}

export interface AuthResponseDto {
  token: string;
  refreshToken: string;
  usuario: {
    id: string;
    nome: string;
    email: string;
    perfil: string;
  };
}
