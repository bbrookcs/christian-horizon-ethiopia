/**
 * @typedef {{
 *   id: string;
 *   category: 'news' | 'vacancy';
 *   title: string;
 *   date: string;
 *   dateIso: string;
 *   readTime: string;
 *   image: string;
 *   excerpt: string;
 *   body: string[];
 *   applyLink?: string;
 *   deadline?: string;
 *   location?: string;
 *   department?: string;
 * }} Post
 */

/** @type {Post[]} */
export const blogPosts = [
	{
		id: 'christian-horizon-expanding',
		category: 'news',
		title: 'Christian Horizon is Expanding',
		date: '15 October, 2024',
		dateIso: '2024-10-15',
		readTime: '5 min read',
		image: '/img4.jpg',
		excerpt:
			'Lorem ipsum dolor sit amet consectetur. Tortor sapien in cras risus placerat. Enim fermentum scelerisque sollicitudin eleifend dignissim consequat.',
		body: [
			'Lorem ipsum dolor sit amet consectetur. Tortor sapien in cras risus placerat. Enim fermentum scelerisque sollicitudin eleifend dignissim consequat. Through this next chapter, Horizons Ethiopia Development Services is broadening its reach so that more children, families, and educators can benefit from inclusive programs rooted in dignity and long-term partnership.',
			'Our expansion includes strengthening ties with schools and woreda offices, scaling teacher training in special needs education, and opening new pathways for sponsorship and community-led initiatives. Each step is guided by feedback from the communities we serve and the belief that lasting change happens together.',
			'We invite partners, donors, and volunteers to walk alongside us: whether you support a classroom, a caregiver cooperative, or a child\'s journey back to school, you are part of a movement that turns compassion into concrete opportunity.',
			'Thank you for believing in this work. More updates will follow as new sites come online and as we celebrate milestones with the students and families at the heart of our mission.'
		]
	},
	{
		id: 'supporting-our-community',
		category: 'news',
		title: 'Supporting Our Community',
		date: '10 October, 2024',
		dateIso: '2024-10-10',
		readTime: '3 min read',
		image: '/img2.jpg',
		excerpt:
			'Nam sollicitudin sed tellus lorem. Lorem sit amet consectetur adipiscing elit. Dignissim vivamus nisi elit sollicitudin sed placerat.',
		body: [
			'Nam sollicitudin sed tellus lorem. Lorem sit amet consectetur adipiscing elit. Dignissim vivamus nisi elit sollicitudin sed placerat. Day to day, our teams show up in classrooms, homes, and community spaces to make sure children feel seen — especially those who have faced exclusion or interrupted learning.',
			'This work spans inclusive education, psychosocial support for families, and practical help so parents can stay engaged in their children\'s futures. Small gestures — a trained teacher, a safe corner to read, a listening ear — add up to stronger neighborhoods.',
			'Community support also means transparency: we share progress, listen when plans need to adjust, and celebrate local leadership. HEDS is not rebuilding communities from the outside in; we are investing in what residents already know works best in their context.',
			'If you would like to learn more about a specific program or explore a partnership, we would love to hear from you through our contact page.'
		]
	},
	{
		id: 'program-officer-2024',
		category: 'vacancy',
		title: 'Program Officer – Inclusive Education',
		date: '12 October, 2024',
		dateIso: '2024-10-12',
		readTime: '4 min read',
		image: '/img4.jpg',
		excerpt:
			'We are looking for a motivated Program Officer to lead inclusive education activities across our partner schools in Oromia and SNNPR regions.',
		body: [
			'Horizons Ethiopia Development Services (HEDS) is seeking a qualified Program Officer to support the planning, implementation, and monitoring of inclusive education initiatives.',
			'The successful candidate will work closely with school directors, teachers, and woreda education offices to expand access for children with disabilities and ensure quality learning environments.',
			'Key responsibilities include training facilitation, field monitoring visits, data collection and reporting, and representing HEDS at coordination meetings.',
			'This is a full-time position based in Addis Ababa with frequent travel to field sites. Salary is competitive and commensurate with experience.'
		],
		department: 'Programs',
		location: 'Addis Ababa (with field travel)',
		deadline: 'November 5, 2024',
		applyLink: 'mailto:hr@horizonsethi.org?subject=Application%20-%20Program%20Officer'
	}
];

/** @param {string} [id] */
export function getPostById(id) {
	return blogPosts.find((p) => p.id === id);
}

/** Legacy – kept for backward compatibility */
/** @param {string} [type] */
export function getPostByType(type) {
	return blogPosts.find((p) => p.id === type);
}
