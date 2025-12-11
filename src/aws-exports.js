// MOCK do aws-exports para build estático no Amplify
// Não contém nenhuma credencial. Somente impede erro de importação.

const awsmobile = {
  aws_project_region: "sa-east-1",
  aws_cognito_identity_pool_id: "",
  aws_cognito_region: "sa-east-1",
  aws_user_pools_id: "",
  aws_user_pools_web_client_id: "",
  oauth: {}
};

export default awsmobile;

