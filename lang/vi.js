export const transValidation = {
    email_incorrect: 'Email phải có dạng example@gmail.com!',
    gender_incorrect: 'Trường giới tính bị sai?',
    password_incorrect: 'Mật khẩu chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.',
    password_confirm_incorrect: 'Nhập lại mật khẩu chưa chính xác.',
    update_username: 'Username giới hạn trong khoảng 3-17 kí tự và không được phép chứa ký tự đặc biệt.',
    update_gender: 'Oops! Dữ liệu giới tính có vấn đề.',
    update_address: 'Địa chỉ giới hạn trong 3-30 kí tự.',
    update_phone: 'Số điện thoại bắt đầu bằng số 0 và giới hạn trong 10-11 kí tự.'
};

export const transErrors = {
    account_in_use: 'Email này đã được sử dụng.',
    account_removed: 'Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu lầm, vui lòng liên hệ với bộ phận hỗ trợ.',
    account_not_active: 'Email chưa được kích hoạt tài khoản.',
    token_undefined: 'Token không tồn lại!',
    login_failed: 'Sai tài khoản hoặc mật khẩu.',
    server_error: 'Có lỗi ở phía server, vui lòng liên hệ với bộ phận hỗ trợ.',
    avatar_type: 'Kiểu file không hợp lệ.',
    avatar_size: 'Ảnh upload tối đa cho phép là 1 Mb'
};

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email của bạn để kích hoạt tài khoản trước khi đăng nhập.`;
    },
    account_actived: 'Tài khoản đã kích hoạt thành công, bạn đã có thể đăng nhập vào ứng dụng',
    loginSuccess: (username) => {
        return `Xin chào ${username}, chúc bạn một ngày tốt lành.`;
    },
    logout_success: 'Đăng xuất tài khoản thành công, hẹn gặp lại!',
    user_info_updated: 'Cập nhật thông tin người dùng thành công.'
};

export const transMail = {
    subject: 'Chat: Xác nhận tài khoản.',
    template: (linkVerify) => {
        return `
            <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng Chat.</h2>
            <h3>Vui lòng click vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
            <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
            <h4>Xin cám ơn,</h4>
        `;
    },
    send_failed: 'Có lỗi trong quá trình gửi email, vui lòng liên hệ lại với bộ phận hỗ trợ.'
};
