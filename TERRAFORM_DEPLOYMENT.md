## Tembea - Terraform Infrastructure

## Summary

Your Tembea website is deployed on AWS with a modular Terraform infrastructure:

**Live Website:** http://tembea-app-dev-275415895417.s3-website-us-east-1.amazonaws.com

### Infrastructure Components
- **S3**: Static website hosting + artifacts bucket
- **CodeCommit**: Git repository for source code
- **CodeBuild**: Automated build with Node.js 18
- **CodePipeline**: 3-stage CI/CD pipeline (Source → Build → Deploy)
- **IAM**: Role-based access control
- **EventBridge**: Automated triggers on code changes

### AWS Account
- Account ID: 275415895417
- Region: us-east-1
- Monthly Costs: ~/usr/bin/bash.01 for website hosting

### Deployment Commands
#### Build Locally
```bash
npm run build
```

#### Deploy to S3
```bash
aws s3 sync dist/ s3://tembea-app-dev-275415895417/ --region us-east-1
```
