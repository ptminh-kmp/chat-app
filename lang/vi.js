export const transValidation = {
    email_incorrect: 'Email phải có dạng example@gmail.com!',
    gender_incorrect: 'Trường giới tính bị sai?',
    password_incorrect: 'Mật khẩu chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.',
    password_confirm_incorrect: 'Nhập lại mật khẩu chưa chính xác.'
};

export const transErrors = {
    account_in_use: 'Email này đã được sử dụng.',
    account_removed: 'Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu lầm, vui lòng liên hệ với bộ phận hỗ trợ.',
    account_not_active: 'Email chưa được kích hoạt tài khoản.',
};

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email của bạn để kích hoạt tài khoản trước khi đăng nhập.`;
    }
};
