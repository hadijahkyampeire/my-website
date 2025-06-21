# Hadijah Kyampeire - Professional Portfolio

A modern, responsive portfolio website built with React and Material-UI, designed to showcase my skills, experience, and projects for job applications.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Navigation**: Single-page application with smooth scrolling
- **SEO Optimized**: Meta tags and structured content for better search visibility
- **Performance**: Built with Vite for fast development and optimized builds

## 📱 Sections

1. **Hero Section** - Compelling introduction with call-to-action buttons
2. **About** - Personal story and what I do
3. **Skills** - Technical skills organized by category
4. **Experience** - Work history with detailed descriptions
5. **Projects** - Featured projects with live demos and GitHub links
6. **Education & Certifications** - Academic background and professional certifications
7. **Contact** - Multiple ways to get in touch

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite, Material-UI
- **Styling**: Tailwind CSS, CSS-in-JS
- **Icons**: Material-UI Icons
- **Routing**: React Router DOM
- **Deployment**: AWS S3, CloudFront, CodePipeline

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment with AWS CodePipeline

This project is configured for automatic deployment to AWS S3 and CloudFront using AWS CodePipeline.

### Prerequisites

1. An S3 bucket configured for static website hosting
2. A CloudFront distribution pointing to your S3 bucket
3. AWS CodeBuild service role with appropriate permissions

### Required Environment Variables

Set these environment variables in your CodeBuild project:

- `S3_BUCKET_NAME`: Your S3 bucket name (e.g., `my-portfolio-website`)
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

### CodeBuild Service Role Permissions

Your CodeBuild service role needs the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": "arn:aws:cloudfront::*:distribution/*"
    }
  ]
}
```

### Pipeline Setup

1. Create a new CodePipeline with source from your Git repository
2. Add a build stage using CodeBuild
3. Configure the build project to use the `buildspec.yml` file
4. Set the environment variables mentioned above
5. Connect to your main branch for automatic deployments

The pipeline will automatically:

- Install dependencies
- Build the React application
- Deploy to S3
- Invalidate CloudFront cache

## 📝 Customization

### Personal Information

Update the following in `src/pages/Home.jsx`:

- Personal details (name, title, description)
- Contact information
- Work experience
- Education and certifications
- Project details

### Styling

- Theme colors: `src/theme.js`
- Global styles: `src/index.css`
- Component-specific styles: Individual component files

### Content

- Update project images and links
- Modify skills and technologies
- Adjust experience descriptions
- Update contact information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **LinkedIn**: [Hadijah Kyampeire](https://www.linkedin.com/in/hadijah-kyampeire-418900141/)
- **GitHub**: [hadijahkyampeire](https://github.com/hadijahkyampeire)
- **Email**: hadijahkyampeire@gmail.com
