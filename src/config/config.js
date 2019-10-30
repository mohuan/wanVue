const mode = process.env.NODE_ENV

const config = {
  copyright: '',
  sys_name: '玩',
  env: mode,
  base_path: mode === 'development' ? '/' : '/',
  api_url: mode === 'development' ? '' : '/api/',
};

export default config
