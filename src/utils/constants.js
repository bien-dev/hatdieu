import nhung from '../assets/Nguyen-Thi-Nhung.png';
import hung from '../assets/Pham-Quoc-Hung.jpeg';
import bien from '../assets/pham-van-bien.jpeg';

export const links = [
	{
		id: 1,
		text: 'trang chủ',
		url: '/',
	},
	{
		id: 2,
		text: 'về an nhiên',
		url: '/about',
	},
	{
		id: 3,
		text: 'sản phẩm',
		url: '/products',
	},
];

export const reviews = [
	{
		id: 1,
		image: hung,
		name: 'Ông Phạm Quốc Hưng',
		job: 'Nông dân',
		text: 'Các sản phẩm tại Đặc sản An Nhiên rất thơm ngon, chất lượng. Tư vấn khách hàng chu đáo, nhiệt tình. Người nhà tôi rất thích các sản phẩm tại đây vì yên tâm về độ ngon và độ an toàn cho sức khỏe!',
	},
	{
		id: 2,
		image: nhung,
		name: 'Bà Nguyễn Thị Nhung',
		job: 'Nguyên Hiệu trưởng trường tiều học, Gia Lai',
		text: 'Tôi rất yên tâm khi mua hàng tại Đặc sản An Nhiên. Các sản phẩm đảm bảo chất lượng, vệ sinh an toàn thực phẩm, tốt cho sức khỏe. Dịch vụ chăm sóc khách hàng tận tâm. Tôi rất vui khi giới thiệu người nhà về các sản phẩm tại đây! Xin cảm ơn!',
	},
	{
		id: 3,
		image: bien,
		name: 'Anh Phạm Văn Biên',
		job: 'Lập trình viên',
		text: 'Chất lượng dịch vụ tuyệt vời. Các sản phẩm của Đặc sản An Nhiên như mật ong, hạt điều, macca, bò khô sợi, gạo lứt rong biển,… đều rất thơm ngon, không chất bảo quản, rất tốt cho sức khoẻ. Phục vụ tận tình chu đáo. Tôi sẽ giới thiệu cho người thân và bạn bè mua hàng ở đây.',
	},
];

export const products_url =
	'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
