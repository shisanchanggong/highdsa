/**
 * @Desc 测试DES加密
 * 
 * @Author 何明胜
 * 
 * @Created at 2018年3月17日 下午7:59:57
 * 
 * @Version 1.0.0
 */

$(function() {
	btnEncryptClick();
	btnDecryptClick();
});

/**
 * 显示加密结果
 * 
 * @returns
 */
function btnEncryptClick() {
	$('#btn_showEncrypt').click(function() {
		$('#p_showDesEncrypt').text($.DESEncrypt($('#txt_encrypt').val()));
	});
}

/**
 * 显示解密结果
 * 
 * @returns
 */
function btnDecryptClick() {
	$('#btn_showDecrypt').click(function() {
		$('#p_showDesDecrypt').text($.DESDecrypt($('#txt_decrypt').val()));
	});
}