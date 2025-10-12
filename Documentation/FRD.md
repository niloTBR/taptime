# TapTime Platform - Functional Requirements Document (FRD)

## Document Information

| **Attribute** | **Details** |
|---------------|-------------|
| **Document Version** | 1.0 |
| **Last Updated** | October 2025 |
| **Document Type** | Functional Requirements Document |
| **Scope** | TapTime Expert Consultation Platform |
| **Stakeholders** | Product, Engineering, Design, Business |

---

# 1. System Overview & Architecture

## 1.1 Platform Architecture Matrix

| **Layer** | **Components** | **Technologies** | **Responsibilities** | **Scalability Requirements** |
|-----------|----------------|------------------|---------------------|------------------------------|
| **Presentation** | Web App, Mobile App, Admin Dashboard | React/Next.js, React Native, shadcn/ui | User interfaces, responsive design | Handle 100K+ concurrent users |
| **API Gateway** | Authentication, Rate Limiting, Routing | Node.js/Express, API Gateway | Request routing, auth, throttling | 10K+ requests/second |
| **Business Logic** | User Management, Booking Engine, Matching Algorithm | Node.js/Python, Microservices | Core business operations | Horizontal scaling |
| **Data Layer** | Primary DB, Cache, Search, Analytics | PostgreSQL, Redis, Elasticsearch, Analytics DB | Data persistence, search, analytics | Multi-region replication |
| **Integration** | Payment, Video, Email, Calendar | Stripe, WebRTC/Agora, SendGrid, CalDAV | Third-party service integration | 99.9% uptime SLA |
| **Infrastructure** | CDN, Load Balancers, Monitoring | AWS/Azure, CloudFlare, DataDog | Performance, monitoring, security | Auto-scaling, global distribution |

## 1.2 System Context Diagram

```
[Users] ↔ [Web/Mobile App] ↔ [API Gateway] ↔ [Business Services] ↔ [Data Layer]
                ↓                    ↓                ↓               ↓
         [Admin Dashboard]    [Auth Service]   [Payment Service]  [Analytics]
                ↓                    ↓                ↓               ↓
         [Expert Portal]      [Video Service]  [Notification]   [Monitoring]
```

---

# 2. Core Functional Modules

## 2.1 User Management System

### 2.1.1 User Registration & Authentication

| **Function** | **Description** | **Acceptance Criteria** | **Priority** |
|--------------|-----------------|------------------------|--------------|
| **Multi-Role Registration** | Support user, expert, admin registration flows | Distinct registration paths, role-based validation | P0 |
| **OAuth Integration** | Google, LinkedIn, Microsoft SSO | Social login reduces friction by 40% | P1 |
| **Email Verification** | Secure email verification process | 99.5% delivery rate, 24hr verification window | P0 |
| **Multi-Factor Authentication** | SMS, TOTP, backup codes | Optional for users, mandatory for experts/admins | P1 |
| **Password Management** | Reset, change, security requirements | NIST compliant password policies | P0 |

### 2.1.2 Profile Management

| **Feature** | **User Type** | **Requirements** | **Validation Rules** |
|-------------|---------------|------------------|-------------------|
| **Basic Profile** | All Users | Name, email, phone, timezone, preferences | Required fields validation, format checks |
| **Expert Profile** | Experts | Bio, credentials, portfolio, specializations | Min 500 char bio, credential verification |
| **Company Profile** | Corporate Users | Company details, billing info, team management | Business verification, VAT validation |
| **Admin Profile** | Administrators | Role permissions, access levels, audit trail | Role-based access control, activity logging |

### 2.1.3 User Profile Data Model

| **Entity** | **Attributes** | **Relationships** | **Constraints** |
|------------|----------------|------------------|-----------------|
| **User** | id, email, role, status, created_at, updated_at | HasOne Profile, HasMany Bookings | Unique email, valid role enum |
| **Profile** | user_id, first_name, last_name, bio, timezone, avatar | BelongsTo User, HasMany Expertises | Required name fields |
| **Expertise** | profile_id, category_id, subcategory_id, years_experience | BelongsTo Profile, BelongsTo Category | Min 1 year experience |
| **Verification** | profile_id, type, status, verified_by, documents | BelongsTo Profile | Status workflow validation |

## 2.2 Expert Discovery & Matching Engine

### 2.2.1 Search & Filtering Capabilities

| **Filter Type** | **Options** | **Implementation** | **Performance Requirement** |
|-----------------|-------------|-------------------|---------------------------|
| **Category** | Business, Technology, Design, Marketing, Finance, Health | Hierarchical category system | <100ms response time |
| **Sub-Category** | Nested specializations within categories | Dynamic loading based on category | <50ms response time |
| **Price Range** | $50-$100, $100-$250, $250-$500, $500+ | Slider interface with preset ranges | Real-time filtering |
| **Availability** | Next 24hrs, This week, Next week, Custom date | Calendar integration, timezone aware | <200ms response time |
| **Rating** | 4.0+, 4.5+, 4.8+, 5.0 only | Aggregate rating calculation | Cached ratings, <50ms |
| **Experience** | 1-3 years, 3-5 years, 5-10 years, 10+ years | Based on profile data | Indexed search |
| **Location** | Same timezone, Same country, Global | Geographic and timezone filtering | Geolocation services |
| **Languages** | English, Spanish, French, German, Mandarin, etc. | Multi-language support | Language preference matching |

### 2.2.2 AI Matching Algorithm

| **Matching Factor** | **Weight** | **Data Sources** | **Algorithm** |
|-------------------|------------|------------------|---------------|
| **Expertise Relevance** | 40% | Category, subcategory, skills, experience | Semantic similarity, NLP |
| **Historical Performance** | 25% | Reviews, ratings, completion rates | Weighted scoring model |
| **Availability Match** | 20% | Calendar data, timezone preferences | Time slot optimization |
| **User Preferences** | 10% | Past bookings, saved searches, ratings | Collaborative filtering |
| **Price Compatibility** | 5% | Budget range, pricing tiers | Economic utility matching |

### 2.2.3 Expert Profile Display Matrix

| **Section** | **Required Fields** | **Optional Fields** | **Validation Rules** |
|-------------|-------------------|-------------------|-------------------|
| **Header** | Name, title, rating, response time | Avatar, verification badges | Professional headshot, verified credentials |
| **About** | Bio (min 500 chars), years experience | Education, certifications | Grammar check, professional language |
| **Expertise** | Primary category, specializations | Skills tags, tools used | Min 3 specializations, relevant skills |
| **Experience** | Work history, notable projects | Case studies, testimonials | Verifiable employment history |
| **Pricing** | Hourly rate, session types | Package deals, bulk discounts | Market rate validation |
| **Availability** | Calendar integration, timezone | Preferred meeting times | Real-time availability |
| **Reviews** | Overall rating, recent reviews | Response to reviews | Minimum 5 reviews for rating display |

## 2.3 Booking & Scheduling System

### 2.3.1 Booking Flow State Machine

| **State** | **Triggers** | **Next States** | **Actions** | **Timeouts** |
|-----------|--------------|----------------|-------------|--------------|
| **Available** | User selects time slot | Pending Confirmation | Reserve slot, send notification | 15 minutes |
| **Pending Confirmation** | Expert accepts/declines | Confirmed/Available | Payment processing/release slot | 24 hours |
| **Confirmed** | Payment successful | Scheduled | Calendar invites, confirmations | N/A |
| **Scheduled** | Session start time | In Progress | Video room creation | 15 minutes late |
| **In Progress** | Session active | Completed/Cancelled | Session recording, time tracking | Session duration + 30min |
| **Completed** | Session ended | Closed | Review prompts, payment release | 48 hours for reviews |
| **Cancelled** | User/Expert cancels | Closed | Refund processing, rescheduling | Cancellation policy rules |
| **No Show** | Neither party joins | Closed | Automatic refund/charge based on policy | 30 minutes after start |

### 2.3.2 Calendar Integration Requirements

| **Calendar Provider** | **Integration Type** | **Sync Capabilities** | **Conflict Resolution** |
|---------------------|-------------------|-------------------|----------------------|
| **Google Calendar** | CalDAV, API | Bidirectional sync, real-time updates | TapTime takes priority, user notification |
| **Outlook/Exchange** | EWS, Graph API | Event creation, availability check | Merge conflicts prompt user choice |
| **Apple Calendar** | CalDAV | Read availability, create events | Manual sync option, conflict alerts |
| **Calendly** | API Integration | Import availability, export bookings | One-way sync from Calendly |
| **Generic CalDAV** | CalDAV Protocol | Basic sync, limited features | Best-effort sync, manual resolution |

### 2.3.3 Session Management Matrix

| **Session Type** | **Duration Options** | **Pricing Model** | **Features Included** |
|------------------|--------------------|--------------------|---------------------|
| **Quick Consultation** | 15, 30 minutes | Fixed rate per slot | Video call, basic recording |
| **Standard Session** | 45, 60 minutes | Hourly rate | Video call, recording, follow-up notes |
| **Extended Session** | 90, 120 minutes | Hourly rate with discount | All features + session materials |
| **Package Deal** | Multiple sessions | Bulk discount | Priority booking, dedicated support |
| **Workshop** | 2-4 hours | Custom pricing | Group sessions, materials, recording |

## 2.4 Payment & Transaction Management

### 2.4.1 Payment Processing Workflow

| **Step** | **Actor** | **Action** | **Validation** | **Fallback** |
|----------|-----------|------------|----------------|--------------|
| **1. Authorization** | User | Provide payment method | Card validation, fraud check | Alternative payment methods |
| **2. Hold** | System | Authorize amount | Sufficient funds, risk assessment | Payment decline handling |
| **3. Confirmation** | Expert | Accept booking | Session terms validation | Auto-accept after timeout |
| **4. Capture** | System | Charge payment | Successful session completion | Dispute resolution process |
| **5. Distribution** | System | Release funds to expert | Commission calculation | Manual review for disputes |
| **6. Settlement** | System | Expert payout | Bank account validation | Hold for investigation |

### 2.4.2 Commission & Pricing Structure

| **Expert Tier** | **Commission Rate** | **Minimum Session Fee** | **Payment Schedule** | **Additional Benefits** |
|-----------------|-------------------|----------------------|-------------------|----------------------|
| **New Expert** | 25% | $50 | Weekly payout | Basic profile features |
| **Verified Expert** | 20% | $75 | Weekly payout | Enhanced profile, priority support |
| **Featured Expert** | 15% | $100 | Daily payout option | Premium placement, analytics |
| **Elite Expert** | 12% | $150 | Instant payout option | Custom branding, dedicated support |
| **Enterprise Expert** | 10% | $200 | Custom terms | White-label options, SLA agreements |

### 2.4.3 Payment Methods Support Matrix

| **Payment Method** | **Geographic Coverage** | **Processing Fee** | **Settlement Time** | **Chargeback Protection** |
|-------------------|------------------------|-------------------|-------------------|------------------------|
| **Credit/Debit Cards** | Global | 2.9% + $0.30 | 2-3 business days | Standard protection |
| **PayPal** | 200+ countries | 3.4% + $0.30 | 1-2 business days | PayPal protection |
| **Bank Transfer (ACH)** | US, EU | 0.8% | 3-5 business days | Limited protection |
| **Digital Wallets** | 50+ countries | 2.9% + $0.30 | 1-2 business days | Wallet-specific protection |
| **Corporate Cards** | Global | 2.9% + $0.30 | 2-3 business days | Enhanced protection |
| **Cryptocurrency** | Global | 1.5% | Instant | No chargeback protection |

## 2.5 Video Communication System

### 2.5.1 Video Platform Requirements

| **Requirement** | **Specification** | **Fallback Option** | **Quality Metrics** |
|-----------------|------------------|-------------------|-------------------|
| **Video Quality** | HD 1080p preferred, 720p minimum | 480p for low bandwidth | 95% sessions at target quality |
| **Audio Quality** | 48kHz sample rate, noise cancellation | Standard audio | <2% audio issues reported |
| **Latency** | <150ms peer-to-peer | <300ms through servers | 99% sessions meet latency target |
| **Reliability** | 99.9% uptime | Phone bridge backup | <1% session failures |
| **Browser Support** | Chrome, Firefox, Safari, Edge | Mobile app fallback | 100% supported browsers |
| **Mobile Support** | iOS 12+, Android 8+ | Web app fallback | Native app preferred |

### 2.5.2 Video Session Features Matrix

| **Feature** | **Basic Sessions** | **Premium Sessions** | **Enterprise Sessions** | **Technical Requirements** |
|-------------|------------------|--------------------|-----------------------|---------------------------|
| **HD Video** | ✓ | ✓ | ✓ | WebRTC, H.264 codec |
| **Screen Sharing** | ✓ | ✓ | ✓ | WebRTC screen capture API |
| **Session Recording** | ✗ | ✓ | ✓ | Cloud storage, MP4 format |
| **Live Transcription** | ✗ | ✗ | ✓ | Speech-to-text API integration |
| **Breakout Rooms** | ✗ | ✗ | ✓ | Multi-room management |
| **Whiteboard** | ✗ | ✓ | ✓ | Canvas API, real-time sync |
| **File Sharing** | ✗ | ✓ | ✓ | Secure file transfer |
| **Chat Messaging** | ✓ | ✓ | ✓ | Real-time messaging |

### 2.5.3 Video Infrastructure Scalability

| **Metric** | **Target** | **Scaling Strategy** | **Monitoring** |
|-------------|------------|-------------------|----------------|
| **Concurrent Sessions** | 10,000+ | Auto-scaling server clusters | Real-time session count |
| **Geographic Coverage** | Global | Multi-region deployment | Regional latency monitoring |
| **Bandwidth Optimization** | Adaptive bitrate | Dynamic quality adjustment | Network condition detection |
| **Storage Requirements** | 1PB+ recording storage | Distributed cloud storage | Storage utilization alerts |

## 2.6 Review & Rating System

### 2.6.1 Review Collection Workflow

| **Stage** | **Timing** | **Participants** | **Requirements** | **Automation Rules** |
|-----------|------------|------------------|------------------|-------------------|
| **Session End** | Immediate | Both parties | Session completion confirmation | Auto-trigger review prompt |
| **Review Request** | 2 hours post-session | User & Expert | Email/app notification | 3 reminder sequence |
| **Review Submission** | 48-hour window | Both parties | Rating + optional text | Minimum rating required |
| **Review Validation** | Real-time | System | Spam/abuse detection | Auto-filter inappropriate content |
| **Review Publication** | After validation | System | Both reviews submitted | Display immediately after approval |

### 2.6.2 Rating Calculation Matrix

| **Rating Component** | **Weight** | **Data Source** | **Calculation Method** | **Update Frequency** |
|---------------------|------------|-----------------|----------------------|-------------------|
| **Session Quality** | 40% | User rating (1-5 stars) | Weighted average, recent bias | After each session |
| **Communication** | 20% | Expert responsiveness rating | Time-to-response metrics | Daily recalculation |
| **Expertise Level** | 25% | Knowledge demonstration rating | Session outcome assessment | Weekly average |
| **Professionalism** | 15% | Punctuality, preparation rating | Behavioral metrics | Daily update |

### 2.6.3 Review Display & Management

| **Review Type** | **Display Rules** | **Moderation Level** | **Appeal Process** |
|-----------------|------------------|-------------------|------------------|
| **5-Star Reviews** | Display immediately | Light moderation | Standard appeal |
| **4-Star Reviews** | Display immediately | Standard moderation | Standard appeal |
| **3-Star Reviews** | Display after 24hr | Enhanced moderation | Priority appeal |
| **1-2 Star Reviews** | Hold for review | Manual moderation | Expedited appeal |
| **Text Reviews** | Sentiment analysis | AI + human review | Appeal board review |

## 2.7 Admin Dashboard & Management

### 2.7.1 Admin Role & Permission Matrix

| **Role** | **User Management** | **Expert Verification** | **Financial Management** | **Content Management** | **System Administration** |
|----------|-------------------|----------------------|------------------------|----------------------|-------------------------|
| **Super Admin** | Full CRUD | Full verification rights | Full financial access | Full content control | Complete system access |
| **Operations Manager** | View/Edit users | Expert approval workflow | Transaction monitoring | Category management | Limited system access |
| **Customer Support** | User support actions | View verification status | View transactions | FAQ/Help content | No system access |
| **Financial Analyst** | View user data | No access | Full financial analytics | No access | No access |
| **Content Moderator** | Limited user actions | No access | No access | Review moderation | No access |

### 2.7.2 Key Performance Dashboard

| **Metric Category** | **KPIs** | **Real-time Updates** | **Alert Thresholds** |
|-------------------|----------|---------------------|-------------------|
| **Platform Health** | Uptime, response time, error rates | Yes | 99% uptime, <500ms response |
| **User Activity** | DAU, MAU, session completion rates | Hourly | 20% drop in activity |
| **Financial Metrics** | Revenue, transaction volume, commission | Daily | 15% revenue decrease |
| **Quality Metrics** | Average rating, dispute rate, expert satisfaction | Daily | <4.0 average rating |
| **Growth Metrics** | User acquisition, expert onboarding, retention | Weekly | 10% growth rate decline |

### 2.7.3 Expert Verification Workflow

| **Verification Step** | **Requirements** | **Validation Method** | **Approval Criteria** | **Rejection Reasons** |
|---------------------|------------------|---------------------|---------------------|-------------------|
| **Identity Verification** | Government ID, photo | Document verification service | Clear photo, valid ID | Blurry documents, expired ID |
| **Professional Background** | Resume, LinkedIn profile | Manual review + API validation | Relevant experience, consistent info | Insufficient experience, false claims |
| **Expertise Validation** | Certificates, work samples | Domain expert review | Demonstrated competency | Lack of expertise proof |
| **Reference Check** | Professional references | Direct contact verification | Positive references | Negative/unresponsive references |
| **Interview Process** | Video interview | Platform team assessment | Communication skills, expertise | Poor communication, unqualified |

---

# 3. Non-Functional Requirements

## 3.1 Performance Requirements

| **Metric** | **Target** | **Measurement Method** | **Acceptance Criteria** |
|-------------|------------|----------------------|----------------------|
| **Page Load Time** | <2 seconds | Real User Monitoring (RUM) | 95th percentile under 3 seconds |
| **API Response Time** | <500ms | Application Performance Monitoring | 99th percentile under 1 second |
| **Search Response Time** | <200ms | Search analytics | 95% of searches complete under 300ms |
| **Video Call Setup** | <10 seconds | Call setup metrics | 90% of calls connect within 15 seconds |
| **Database Query Time** | <100ms | Database monitoring | 95% of queries under 200ms |
| **Concurrent Users** | 100,000+ | Load testing | Maintain performance under peak load |

## 3.2 Security Requirements

| **Security Domain** | **Requirements** | **Implementation** | **Compliance Standards** |
|-------------------|------------------|-------------------|------------------------|
| **Data Encryption** | Encrypt data at rest and in transit | AES-256, TLS 1.3 | PCI DSS, GDPR |
| **Authentication** | Multi-factor authentication, secure sessions | OAuth 2.0, JWT tokens | NIST guidelines |
| **Authorization** | Role-based access control | RBAC with fine-grained permissions | OWASP standards |
| **Payment Security** | PCI DSS compliance | Tokenization, secure vaults | PCI DSS Level 1 |
| **Data Privacy** | GDPR/CCPA compliance | Data minimization, consent management | GDPR, CCPA |
| **Vulnerability Management** | Regular security audits | Penetration testing, code scanning | ISO 27001 |

## 3.3 Scalability & Reliability

| **Aspect** | **Requirement** | **Implementation Strategy** | **Monitoring** |
|------------|-----------------|---------------------------|----------------|
| **Horizontal Scaling** | Auto-scale based on demand | Kubernetes, microservices | CPU/memory utilization |
| **Geographic Distribution** | Multi-region deployment | CDN, regional data centers | Regional performance metrics |
| **Fault Tolerance** | 99.9% uptime SLA | Redundancy, failover systems | Uptime monitoring |
| **Data Backup** | Point-in-time recovery | Automated backups, replication | Backup success rates |
| **Disaster Recovery** | <4 hour RTO, <1 hour RPO | Multi-region failover | DR drill success metrics |

---

# 4. Integration Requirements

## 4.1 Third-Party Service Integrations

| **Service Category** | **Provider** | **Integration Type** | **SLA Requirements** | **Fallback Strategy** |
|---------------------|--------------|-------------------|---------------------|-------------------|
| **Payment Processing** | Stripe, PayPal | REST API, Webhooks | 99.9% uptime | Multiple payment processors |
| **Video Infrastructure** | Agora, Twilio | SDK integration | 99.95% uptime | Backup video provider |
| **Email Services** | SendGrid, AWS SES | API integration | 99% delivery rate | Multi-provider failover |
| **SMS Notifications** | Twilio, AWS SNS | API integration | 98% delivery rate | Provider switching |
| **Calendar Systems** | Google, Outlook | CalDAV, API | 99% sync success | Manual calendar entry |
| **Analytics** | Google Analytics, Mixpanel | JavaScript SDK | Real-time tracking | Data warehouse backup |

## 4.2 API Design Requirements

| **API Characteristic** | **Specification** | **Standards** | **Documentation** |
|----------------------|------------------|---------------|------------------|
| **Architecture Style** | RESTful API | REST principles, HTTP verbs | OpenAPI 3.0 specification |
| **Authentication** | Bearer token, API keys | OAuth 2.0, JWT | Authentication flow diagrams |
| **Rate Limiting** | Tiered rate limits | 100-10000 req/hour | Clear limit documentation |
| **Versioning** | URL versioning | /v1/, /v2/ prefix | Migration guides |
| **Error Handling** | Standardized error codes | HTTP status codes, error messages | Error code reference |
| **Response Format** | JSON | Consistent data structure | Response schemas |

---

# 5. Data Requirements & Models

## 5.1 Core Data Entities

### 5.1.1 User Data Model

```sql
TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    role ENUM('user', 'expert', 'admin'),
    status ENUM('active', 'suspended', 'deleted'),
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    last_login TIMESTAMP
);

TABLE profiles (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    bio TEXT,
    avatar_url VARCHAR(500),
    timezone VARCHAR(50),
    language_preference VARCHAR(10),
    phone VARCHAR(20),
    company VARCHAR(200),
    website VARCHAR(500),
    linkedin_url VARCHAR(500),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

### 5.1.2 Expert & Category Model

```sql
TABLE categories (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    parent_id UUID REFERENCES categories(id),
    sort_order INTEGER,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP
);

TABLE expert_profiles (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    hourly_rate DECIMAL(10,2),
    minimum_session_duration INTEGER, -- minutes
    response_time_hours INTEGER,
    years_experience INTEGER,
    is_verified BOOLEAN DEFAULT FALSE,
    verification_date TIMESTAMP,
    is_featured BOOLEAN DEFAULT FALSE,
    average_rating DECIMAL(3,2),
    total_sessions INTEGER DEFAULT 0,
    total_earnings DECIMAL(12,2) DEFAULT 0,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

TABLE expert_categories (
    id UUID PRIMARY KEY,
    expert_profile_id UUID REFERENCES expert_profiles(id),
    category_id UUID REFERENCES categories(id),
    subcategory_id UUID REFERENCES categories(id),
    experience_level ENUM('beginner', 'intermediate', 'expert', 'thought_leader'),
    created_at TIMESTAMP
);
```

### 5.1.3 Booking & Session Model

```sql
TABLE bookings (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    expert_id UUID REFERENCES users(id),
    session_date TIMESTAMP NOT NULL,
    duration_minutes INTEGER NOT NULL,
    hourly_rate DECIMAL(10,2) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    commission_rate DECIMAL(5,4) NOT NULL,
    commission_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show'),
    cancellation_reason TEXT,
    session_notes TEXT,
    video_room_id VARCHAR(200),
    recording_url VARCHAR(500),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

TABLE payments (
    id UUID PRIMARY KEY,
    booking_id UUID REFERENCES bookings(id),
    stripe_payment_id VARCHAR(200),
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    payment_method VARCHAR(50),
    status ENUM('pending', 'authorized', 'captured', 'refunded', 'failed'),
    processed_at TIMESTAMP,
    created_at TIMESTAMP
);
```

### 5.1.4 Review & Rating Model

```sql
TABLE reviews (
    id UUID PRIMARY KEY,
    booking_id UUID REFERENCES bookings(id),
    reviewer_id UUID REFERENCES users(id),
    reviewee_id UUID REFERENCES users(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    is_anonymous BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT TRUE,
    helpful_votes INTEGER DEFAULT 0,
    status ENUM('pending', 'approved', 'rejected'),
    moderated_by UUID REFERENCES users(id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

## 5.2 Data Privacy & Compliance

| **Data Type** | **Retention Period** | **Encryption Level** | **Access Controls** | **Compliance Requirements** |
|---------------|--------------------|--------------------|-------------------|---------------------------|
| **Personal Information** | Account lifetime + 30 days | AES-256 | Role-based, audit logged | GDPR, CCPA |
| **Payment Data** | 7 years (regulatory) | PCI DSS compliant | Restricted access | PCI DSS, SOX |
| **Session Recordings** | 1 year | AES-256 | User/expert only | Data protection laws |
| **Communication Logs** | 2 years | Encrypted storage | Support team access | Communication regulations |
| **Analytics Data** | 2 years (anonymized) | Anonymized/aggregated | Analytics team | Privacy regulations |

---

# 6. Acceptance Criteria & Testing Requirements

## 6.1 Feature Acceptance Criteria

### 6.1.1 User Registration & Authentication

| **Test Scenario** | **Given** | **When** | **Then** | **Priority** |
|------------------|-----------|----------|----------|--------------|
| **Successful Registration** | User visits registration page | Provides valid email, password, role | Account created, verification email sent | P0 |
| **Duplicate Email** | Existing user email | Attempts registration with same email | Error message displayed, registration blocked | P0 |
| **Invalid Password** | Registration form | Provides weak password | Validation error, requirements shown | P1 |
| **Email Verification** | Unverified account | Clicks verification link | Account activated, login enabled | P0 |
| **OAuth Login** | User has Google account | Clicks "Login with Google" | OAuth flow, account created/logged in | P1 |

### 6.1.2 Expert Discovery & Search

| **Test Scenario** | **Given** | **When** | **Then** | **Priority** |
|------------------|-----------|----------|----------|--------------|
| **Basic Search** | User on browse page | Enters search term | Relevant experts displayed | P0 |
| **Category Filter** | Search results displayed | Selects category filter | Results filtered by category | P0 |
| **Price Filter** | Expert results | Sets price range | Only experts in range shown | P1 |
| **No Results** | Search with rare criteria | Submits search | "No results" message with suggestions | P2 |
| **Search Performance** | Any search query | Submits search | Results load within 200ms | P0 |

### 6.1.3 Booking & Payment Flow

| **Test Scenario** | **Given** | **When** | **Then** | **Priority** |
|------------------|-----------|----------|----------|--------------|
| **Successful Booking** | Available expert time slot | User completes booking flow | Session confirmed, payment processed | P0 |
| **Payment Failure** | Invalid payment method | Attempts to book session | Payment fails, booking cancelled | P0 |
| **Expert Unavailable** | Conflicting booking | User tries to book occupied slot | Error message, alternative times suggested | P1 |
| **Booking Confirmation** | Successful payment | Booking completed | Both parties receive confirmation | P0 |
| **Cancellation** | Confirmed booking | User cancels within policy | Appropriate refund processed | P1 |

## 6.2 Performance Testing Requirements

| **Test Type** | **Scenario** | **Acceptance Criteria** | **Tools** |
|---------------|--------------|------------------------|-----------|
| **Load Testing** | 1000 concurrent users | Response time <2 seconds | JMeter, K6 |
| **Stress Testing** | Peak traffic simulation | Graceful degradation | LoadRunner |
| **Volume Testing** | Large dataset operations | Maintain performance | Custom scripts |
| **Endurance Testing** | 24-hour continuous load | No memory leaks | Application monitoring |
| **Spike Testing** | Sudden traffic increase | Auto-scaling response | Cloud monitoring |

## 6.3 Security Testing Requirements

| **Security Test** | **Scope** | **Acceptance Criteria** | **Frequency** |
|------------------|-----------|------------------------|---------------|
| **Penetration Testing** | Full application | No critical vulnerabilities | Quarterly |
| **Vulnerability Scanning** | Code and infrastructure | Remediate high/critical issues | Monthly |
| **Authentication Testing** | Login and session management | Secure authentication flow | With each release |
| **Authorization Testing** | Role-based access | Proper access controls | With each release |
| **Data Protection Testing** | PII and payment data | Encryption and compliance | Quarterly |

---

# 7. Deployment & Environment Requirements

## 7.1 Environment Specifications

| **Environment** | **Purpose** | **Infrastructure** | **Data** | **Integrations** |
|-----------------|-------------|-------------------|----------|------------------|
| **Development** | Feature development | Local/cloud hybrid | Synthetic data | Mock services |
| **Testing** | QA and integration testing | Cloud staging | Anonymized production data | Sandbox integrations |
| **Staging** | Pre-production validation | Production-like | Production data subset | Production integrations (test mode) |
| **Production** | Live platform | Multi-region cloud | Live data | Production integrations |

## 7.2 Deployment Pipeline

| **Stage** | **Triggers** | **Actions** | **Validation** | **Rollback Strategy** |
|-----------|--------------|-------------|----------------|-------------------|
| **Build** | Code commit | Compile, test, package | Unit tests pass | N/A |
| **Test** | Build success | Deploy to test environment | Integration tests pass | Stop deployment |
| **Staging** | Test success | Deploy to staging | User acceptance testing | Database rollback |
| **Production** | Manual approval | Blue-green deployment | Health checks pass | Immediate rollback |
| **Monitoring** | Post-deployment | Performance monitoring | KPIs within targets | Auto-rollback triggers |

---

# 8. Success Metrics & KPIs

## 8.1 Business Metrics

| **Category** | **Metric** | **Target** | **Measurement** | **Review Frequency** |
|--------------|------------|------------|----------------|-------------------|
| **User Growth** | Monthly Active Users | 25% growth MoM | Analytics dashboard | Weekly |
| **Expert Network** | Active experts | 1000+ verified experts | Admin dashboard | Monthly |
| **Revenue** | Gross Marketplace Value | $1M+ monthly GMV | Financial reporting | Monthly |
| **Quality** | Average session rating | 4.5+ stars | Review aggregation | Weekly |
| **Retention** | User retention rate | 70% 30-day retention | Cohort analysis | Monthly |

## 8.2 Technical Metrics

| **Category** | **Metric** | **Target** | **Monitoring** | **Alert Threshold** |
|--------------|------------|------------|----------------|------------------|
| **Performance** | Page load time | <2 seconds | RUM | >3 seconds |
| **Availability** | System uptime | 99.9% | Uptime monitoring | <99% |
| **Reliability** | Error rate | <0.1% | Error tracking | >0.5% |
| **Scalability** | Response time under load | <500ms | Load testing | >1 second |
| **Security** | Security incidents | Zero critical | Security monitoring | Any critical incident |

---

This comprehensive FRD provides the strategic foundation for building the TapTime platform with clear functional requirements, technical specifications, and success criteria. Each requirement is designed to support the core business objectives while ensuring scalability, security, and exceptional user experience.