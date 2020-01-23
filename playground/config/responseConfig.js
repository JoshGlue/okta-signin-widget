module.exports = {
  mocks: {
    // ===== IDX

    '/idp/idx/introspect': [
      'factor-verification-webauthn',
    ],
    '/idp/idx': ['select-factor-authenticate'],
    '/idp/idx/enroll': ['enroll-profile'],
    '/idp/idx/challenge/answer': [
      // 'error-email-verify',
      'terminal-return-expired-email',
    ],
    '/idp/idx/challenge/send': [
      'factor-verification-email',
    ],
    '/idp/idx/challenge/poll': [
      'factor-verification-email',
    ],
    '/idp/idx/challenge': [
      'factor-verification-webauthn',
      'success'
      // 'factor-verification-password',
      // 'factor-verification-email',
    ],
    '/idp/idx/credential/enroll': [
      'factor-enroll-webauthn',
      'success'
    ]
  },
};
