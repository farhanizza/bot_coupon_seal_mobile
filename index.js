const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const userInput = {};

const options = [
	'SEALMFACEBOOK',
	'SEALMOPEN',
	'2023SEALMSEA0511',
	'SEALMFUN987',
	'BATTLESEALM',
	'SEALM999FUN',
	'WELCOMESEALM3',
	'RASCALRABBIT77',
	'THANKS4YOU',
	'GIFT777DEV',
	'7DAYSOFSEALM',
	'CLARAGIFT88',
	'STAYONLINE0526',
	'ILOVEWATERMELONS',
];

const valueServer = [
	'Elim 01 => 20001',
	'Elim 02 => 20002',
	'Elim 03 => 20003',
	'Elim 04 => 20004',
	'Elim 05 => 20005',
	'Elim 06 => 20006',
	'Elim 07 => 20007',
	'Elim 08 => 20008',
	'Elim 09 => 20009',
	'Elim 10 => 20010',
	'Lime 01 => 20011',
	'Lime 02 => 20012',
	'Lime 03 => 20013',
	'Lime 04 => 20014',
	'Lime 05 => 20015',
	'Lime 06 => 20016',
	'Lime 07 => 20017',
];

console.log('Daftar pilihan Server: \n');
valueServer.forEach((value, index) => {
	console.log(`${index + 1}. ${value}`);
});

console.log('\n');

console.log('Daftar pilihan Coupon: \n');
options.forEach((option, index) => {
	console.log(`${index + 1}. ${option}`);
});

console.log('\n');

(async () => {
	try {
		const browser = await puppeteer.launch({
			headless: 'new',
		});
		const page = await browser.newPage();

		await page.goto('https://webview-sealm-sea.sealm.com/Coupon?Lang=ID');

		rl.question('Masukan CSCODE: ', async (server) => {
			rl.question('Masukan Coupon: ', async (coupon) => {
				rl.question('Masukan Server In Game: ', async (serverGame) => {
					const serverNumberGame = parseInt(serverGame);
					const valueOption = options[coupon - 1];
					const valueServerNumber = valueServer[serverNumberGame - 1];
					const [_, serverDetails] = valueServerNumber.split(' => ');
					userInput.numberCoupon = options[coupon - 1];
					userInput.server = server;

					if (valueOption) {
						await page.type('input[name="Cname"]', userInput.server);

						await page.type('input[name="CouponNum"]', userInput.numberCoupon);

						await page.select('.select_server#ServerID', serverDetails);

						await page.click('.wrap_btn #btn_coupon');

						await browser.close();

						console.log('\n');
						console.log(`CSCODE: ${userInput.server}`);
						console.log(`Coupon name: ${userInput.numberCoupon}`);
						console.log(`Server Game: ${_}, ${serverDetails}`);
						console.log(`Sukses input coupon: ${userInput.numberCoupon}`);
					} else {
						console.log('Nomor tidak valid');
						return;
					}
					rl.close();
				});
			});
		});
	} catch (error) {
		console.error('Terjadi kesalahan:', error);
	}
})();
