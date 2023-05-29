const puppeteer = require('puppeteer');

(async () => {
	try {
		const browser = await puppeteer.launch({
			headless: 'new',
		});
		const page = await browser.newPage();

		await page.goto('https://webview-sealm-sea.sealm.com/Coupon?Lang=ID');

		// Contoh pengisian input dengan name "Cname"
		await page.type(
			'input[name="Cname"]',
			'925e824d-c16b-435c-819b-4fbb23009af9'
		);

		// Contoh pengisian input dengan name "CouponNum"
		await page.type('input[name="CouponNum"]', 'SEALMFUN987');

		// Contoh pengisian select dengan name "ServerID"
		await page.select('.select_server#ServerID', '20013');

		// Contoh klik tombol dengan tag a href="#none"
		await page.click('.wrap_btn #btn_coupon');

		await browser.close();

		console.log('Berhasil mengisi formulir dan menavigasi');
	} catch (error) {
		console.error('Terjadi kesalahan:', error);
	}
})();
