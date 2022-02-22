module.exports = {
	siteMetadata: {
		siteUrl: 'https://sylvainlaugier.com',
		title: 'Sylvain Laugier, Full Stack Developper',
		description:
			'Développeur full stack JS à la recherche de sa prochaine expérience professionnelle à Paris.',
		twitterUsername: '@Sylvain_Laugier',
		image: 'preview_site.png',
		icon: 'favicon-32x32.png',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon-32x32.png',
			},
		},
		'gatsby-plugin-typescript',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
};
