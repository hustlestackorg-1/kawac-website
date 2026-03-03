export interface SubProgram {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    content?: string;
    challenge?: string;
    solution?: string;
    impact?: { label: string; value: string }[];
}

export interface Program {
    id: string;
    pillar: "community-care" | "climate-justice" | "inclusive-development";
    category: string;
    title: string;
    description: string;
    image: string;
    color: string;
    content: string;
    challenge: string;
    solution: string;
    impact: { label: string; value: string }[];
    gallery?: { src: string; caption: string }[];
    subPrograms?: SubProgram[];
}

export interface ProgramPillar {
    id: "community-care" | "climate-justice" | "inclusive-development";
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    color: string;
    accentColor: string;
}

export const programPillars: ProgramPillar[] = [
    {
        id: "community-care",
        title: "Community Care & Support",
        subtitle: "Direct Aid · Health · Welfare",
        description: "Holistic support systems for the most vulnerable — seniors, newcomers, survivors, and families in crisis.",
        icon: "❤️",
        color: "#be185d",
        accentColor: "#fce7f3",
    },
    {
        id: "climate-justice",
        title: "Climate Justice",
        subtitle: "Green Economy · Ethical Mobility · Sustainability",
        description: "Equipping marginalized communities with green skills, sustainable livelihoods, and ethical global opportunities.",
        icon: "🌱",
        color: "#16a34a",
        accentColor: "#dcfce7",
    },
    {
        id: "inclusive-development",
        title: "Inclusive Development",
        subtitle: "Rights · Equity · Empowerment",
        description: "Dismantling systemic barriers through advocacy, economic empowerment, and culturally affirming programs.",
        icon: "⚖️",
        color: "#a855f7",
        accentColor: "#f3e8ff",
    },
];

export const programsData: Program[] = [
    // ─── COMMUNITY CARE & SUPPORT ────────────────────────────────────────────
    {
        id: "community-care-support",
        pillar: "community-care",
        category: "Unity",
        title: "Community Care and Support",
        description: "Direct aid, food security, and essentials for immigration settlement and integration.",
        image: "/assets/hero-health.jpg",
        color: "#be185d",
        content: "Holistic integration support including safe food access, clothing, and essential navigation for newcomers.",
        challenge: "Isolation and lack of basic necessities block community integration for many immigrants.",
        solution: "A one-stop community hub for essential services and social safety nets.",
        impact: [
            { label: "Families Served", value: "5,000+" },
            { label: "Meals Provided", value: "50k+" }
        ],
        gallery: [
            { src: "/assets/community_care_1.jpg", caption: "Community Gathering" },
            { src: "/assets/community_care_2.jpg", caption: "Direct Aid Distribution" },
            { src: "/assets/community_care_3.jpg", caption: "Family Support" },
            { src: "/assets/community_care_4.jpg", caption: "Community Engagement" },
            { src: "/assets/community_care_5.jpg", caption: "Healthcare Support" }
        ]
    },
    {
        id: "maternal-childcare",
        pillar: "community-care",
        category: "Health",
        title: "Maternal & Childcare",
        description: "Ensuring safe births and healthy starts for mothers and children in underserved regions.",
        image: "/assets/program-maternal.jpg",
        color: "#be185d",
        content: "Our Maternal and Child Health (MNCH) program focuses on reducing maternal and child mortality through strengthening health systems, training healthcare workers, and providing essential medical equipment and supplies.",
        challenge: "High rates of maternal mortality and preventable child diseases due to lack of access to quality care.",
        solution: "## Holistic Care Framework\nEquitable access to prenatal care, skilled attendance, and long-term mother-child wellness programs.\n\n**KAWAC provides vital information to:**\n*   **Reduce** maternal health risks\n*   **Ensure** Safe birth\n*   **Lower** rates of child mortality\n*   **Prevent** unplanned pregnancies\n\nThe goal is to ensure a positive and healthy experience for both the mother and child, reducing preventable illness and mortality.",
        impact: [
            { label: "Safe Births", value: "5,400+" },
            { label: "Clinics Upgraded", value: "32" },
            { label: "Lives Saved", value: "Countless" }
        ],
        gallery: [
            { src: "/assets/gallery/medical-camp-1.jpg", caption: "Medical Camp Assessment" },
            { src: "/assets/gallery/medical-camp-2.jpg", caption: "Pediatric Eye Check" },
            { src: "/assets/gallery/medical-camp-4.jpg", caption: "Patient Consultation" },
            { src: "/assets/gallery/medical-camp-5.jpg", caption: "Community Health Education" }
        ]
    },
    {
        id: "hiv-aids-support",
        pillar: "community-care",
        category: "Care",
        title: "HIV/AIDS Support",
        description: "Holistic care, stigma reduction, and community-led health sovereignty.",
        image: "/assets/program-hiv-new.jpg",
        color: "#7c3aed",
        content: "Long-standing advocacy and direct support for those living with and affected by HIV/AIDS.",
        challenge: "## Our Objective\nWe are committed to serving the community at the front lines of the HIV/AIDS response. **Our mission is to provide essential prevention, support, and advocacy**, ensuring that marginalized and vulnerable populations have access to the care and resources they need.",
        solution: "## Targeted Outreach\nOur programs provide essential HIV/AIDS education and prevention directly to communities most at risk. We specialize in creating tailored content for:\n\n*   **Young people**\n*   **Racialized communities**\n*   **(MSM)** Men who have sex with men\n*   **People who use drugs**\n\nEnsuring our message is relevant and effective for each group.",
        impact: [
            { label: "Viral Suppression", value: "92%" },
            { label: "Advocates Trained", value: "200+" }
        ]
    },
    {
        id: "good-samaritan-rapid-response",
        pillar: "community-care",
        category: "Response",
        title: "Rapid Response Neighbourhood Support",
        description: "Urgent support, hospital advocacy, and referrals for seniors, newcomers, and vulnerable families.",
        image: "/assets/hero-health.jpg",
        color: "#be185d",
        content: "When people fall through the cracks, we show up—urgent support, hospital advocacy, and referrals for seniors, newcomers, and vulnerable families through KAWAC and KENWA.",
        challenge: "## Program Overview\n**Urgent, Ad Hoc Support**\nThe Good Samaritan Rapid Response Program provides urgent, ad hoc support to vulnerable individuals and families facing crisis.\n\nThe program facilitates hospital discharge planning, delivers rapid response assistance (including emergency support), and connects clients to timely referrals that address barriers to care, treatment adherence, and access to essential social supports.",
        solution: "## Key Services Delivered\n\n*   **Rapid Response Support:** For hospital discharge and immediate post-discharge needs.\n*   **Emergency Assistance:** For urgent health and social vulnerabilities.\n*   **Navigation & Referrals:** To social support services and specialized care.\n*   **Resource Mobilization:** To reduce barriers to treatment and follow-up care.",
        impact: [
            { label: "Mothers Released", value: "310" },
            { label: "Children Supported", value: "50+" }
        ],
        gallery: [
            { src: "/assets/good-samaritan/medical-support.jpg", caption: "Safe Discharge for Mothers" },
            { src: "/assets/good-samaritan/computer-training.jpg", caption: "Seniors Computer Training" },
            { src: "/assets/good-samaritan/food-support.jpg", caption: "Food & Community Support" }
        ]
    },
    {
        id: "elderly-support",
        pillar: "community-care",
        category: "Dignity",
        title: "Elderly Support & Seniors Welfare",
        description: "Promoting digital inclusion, social connection, and active living for our seniors.",
        image: "/assets/elderly-support/elderly-1.jpg",
        color: "#ca8a04",
        content: "## Seniors Digital Inclusion\nIn Canada, KAWAC trained **8 seniors** on Computer use, ensuring they remain connected in a digital world. We now have **four seniors every week** volunteering at the computer hub, passing on their knowledge and skills to others.\n\n## Volunteer Recognition\nKAWAC was recognized by **YRES leadership**, and for this, we are grateful to our directors and volunteers who don't get tired of serving those that need us.",
        challenge: "## Social Isolation & Digital Divide\nMany seniors face increasing social isolation and a digital divide that disconnects them from essential services, family, and community participation.",
        solution: "## Active Aging Framework\nWe implement an 'Active Aging' protocol that combines digital literacy training, intergenerational mentorship, and social wellness circles.",
        impact: [
            { label: "Seniors Trained", value: "8+" },
            { label: "Weekly Volunteers", value: "4" },
            { label: "Community", value: "Stronger" }
        ],
        gallery: [
            { src: "/assets/elderly-support/elderly-1.jpg", caption: "Seniors Workshop" },
            { src: "/assets/elderly-support/elderly-2.jpg", caption: "Community Gathering" },
            { src: "/assets/elderly-support/elderly-3.jpg", caption: "Intergenerational Learning" },
            { src: "/assets/elderly-support/elderly-4.jpg", caption: "Joyful Connection" }
        ]
    },
    {
        id: "niagara-emergency-relief",
        pillar: "community-care",
        category: "Relief",
        title: "Niagara Emergency Relief",
        description: "Immediate food, housing, and crisis support for families across the Niagara Region.",
        image: "/assets/gallery/community-3.jpg",
        color: "#ef4444",
        content: "## Emergency Assistance in the Niagara Region\nWe provide rapid, no-barrier access to essential resources for individuals and families facing crisis in **St. Catharines, Niagara Falls, Welland, and Thorold**.",
        challenge: "## Rising Poverty in Niagara\nThe cost of living crisis has left thousands of Niagara residents choosing between rent and food.",
        solution: "## Rapid Response Framework\nOur 'Good Samaritan' model cuts through red tape. We provide immediate material relief while simultaneously connecting clients to long-term caseworkers.",
        impact: [
            { label: "Households Fed", value: "30k+" },
            { label: "Crisis Cases", value: "24/7" },
            { label: "Region Served", value: "Niagara" }
        ]
    },
    {
        id: "hospital-advocacy",
        pillar: "community-care",
        category: "Health",
        title: "Hospital Advocacy & Discharge Support",
        description: "Navigating the healthcare system and ensuring safe, dignified discharge for vulnerable patients.",
        image: "/assets/good-samaritan/medical-support.jpg",
        color: "#06b6d4",
        content: "## Healthcare Advocacy in Niagara Health Systems\nNavigating the healthcare system can be overwhelming, especially for racialized communities, seniors, and newcomers. KAWAC acts as a bridge between patients and hospital administration.",
        challenge: "## Systemic Barriers in Healthcare\nLanguage barriers, systemic bias, and lack of social support often lead to premature discharge or inadequate care for marginalized patients.",
        solution: "## The 'Bridge' Protocol\nWe deploy trained community health advocates to accompany patients, translate medical jargon, and negotiate safe discharge plans with hospital social workers.",
        impact: [
            { label: "Patients Supported", value: "500+" },
            { label: "Safe Discharges", value: "100%" },
            { label: "Hospitals", value: "All Local" }
        ]
    },
    {
        id: "newcomer-support",
        pillar: "community-care",
        category: "Integration",
        title: "Newcomer Settlement Support",
        description: "Welcome services, housing help, and community integration for immigrants and refugees.",
        image: "/assets/gallery/community-1.jpg",
        color: "#f59e0b",
        content: "## Welcome Home to Niagara\nStarting a new life is challenging. KAWAC serves as a first point of contact for refugees and new immigrants arriving in **St. Catharines and the Niagara Region**.",
        challenge: "## The 'Canadian Experience' Gap\nNewcomers often face isolation, underemployment, and housing discrimination upon arrival.",
        solution: "## Holistic Integration Model\nWe provide 360-degree support that addresses not just logistics, but belonging—connecting newcomers to faith communities, social clubs, and mentorship networks.",
        impact: [
            { label: "Newcomers Served", value: "2,000+" },
            { label: "Homes Found", value: "150+" },
            { label: "Welcome Kits", value: "500" }
        ]
    },
    {
        id: "seniors-emergency-assistance",
        pillar: "community-care",
        category: "Care",
        title: "Seniors Emergency Assistance",
        description: "Rapid aid for elderly residents facing health crises, isolation, or food insecurity.",
        image: "/assets/elderly-support/elderly-4.jpg",
        color: "#8b5cf6",
        content: "## Protecting Our Elders in Niagara\nNo senior should age in fear or hunger. Our Seniors Emergency Assistance program acts as a safety net for isolated elderly residents in **Niagara Region**.",
        challenge: "## The 'Hidden' Crisis\nMany seniors in Niagara live in silent desperation, isolated in apartments without family support.",
        solution: "## Mobile Care Units\nWe bring the support TO the senior. Our volunteers and staff deliver aid directly to the doorstep, ensuring dignity and safety.",
        impact: [
            { label: "Seniors Aided", value: "300+" },
            { label: "Rides Provided", value: "850" },
            { label: "Wellness Checks", value: "Weekly" }
        ]
    },

    // ─── CLIMATE JUSTICE ─────────────────────────────────────────────────────
    {
        id: "climate-justice",
        pillar: "climate-justice",
        category: "Action",
        title: "Climate Justice & Green Livelihoods",
        description: "Sustainable livelihoods and green skills for community-led conservation and resilience.",
        image: "/assets/program-climate.jpg",
        color: "#22c55e",
        content: "Empowering communities with renewable energy training and sustainable agriculture through Climate Action.",
        challenge: "Climate change disproportionately impacts the livelihoods of marginalized groups.",
        solution: "Climatic entrepreneurship and green skills training for resilient food security.",
        impact: [
            { label: "Green Jobs Created", value: "120" },
            { label: "Clean Energy Reached", value: "15k People" }
        ]
    },
    {
        id: "beyond-borders",
        pillar: "climate-justice",
        category: "Mobility",
        title: "Opportunities Beyond Borders",
        description: "Ethical, humanity-centered placements across AU countries, Europe, and North America.",
        image: "/assets/program-mobility.jpg",
        color: "#4c1d95",
        content: "## Opportunities Beyond Borders\n**KAWAC & KENWA facilitate ethical, humanity‑centered placements across AU countries, Europe, and North America.**\n\nThis program is not just about work — it is about humanity, about what you can give and what you can offer to uplift communities.\n\n### Application Portal\n*   [Download Application Form (Word)](/assets/application.docx)\n*   [Apply by Email](mailto:jobs@kawac.ca)\n\n**Facilitation program:** KAWAC/KENWA are not the direct employers. We screen, match, and support ethical mobility.",
        challenge: "## ECOSOC – Observer Status\n**Ethical · Humanity‑Centered · Inclusive**\n\nSkilled talent in ACB communities often faces systemic exclusion and lack of access to ethical global marketplaces.",
        solution: "## Ethical Mobility Framework\nA vetted Health Professional HUB and strategic labour pipelines that guarantee ethical standards and community-centered success.",
        impact: [
            { label: "Global Corridors", value: "AU-EU-NA" },
            { label: "Ethical Placements", value: "850+" },
            { label: "Partner Institutions", value: "25+" }
        ]
    },

    // ─── INCLUSIVE DEVELOPMENT ───────────────────────────────────────────────
    {
        id: "inclusive-development",
        pillar: "inclusive-development",
        category: "Growth",
        title: "Inclusive Development",
        description: "Building equitable futures through meaningful employment and global-standard pathways for marginalized youth.",
        image: "/assets/program-youth.jpg",
        color: "#a855f7",
        content: "We aim to ensure the benefits of economic and social progress are shared by everyone—especially women, people with disabilities, Indigenous peoples, and other equity-deserving communities.",
        challenge: "## Key Areas of Focus\n\n**Building Social & Economic Capital**\n*   **Workforce Development:** Skills training and job pathways for Indigenous, Black, and equity-deserving communities.\n*   **Inclusive Entrepreneurship:** Business supports that expand opportunity and asset ownership.\n*   **Responsible Business:** Engage private sector to advance human rights and gender equality across supply chains.\n\n**Disability-Inclusive Development**\n*   **Inclusive Design:** Accessible products, services, and digital experiences for diverse needs.\n*   **Evidence-Based Policy:** Methods and data that represent lived experiences to guide strategy.\n\n**Advocacy for Social & Human Rights Inclusion**\n*   **Legal Reform:** Eliminate discriminatory laws that block equitable access to resources.\n*   **Good Governance:** Strengthen public institutions to be transparent, accountable, and representative.",
        solution: "## Approaches & Frameworks\n\n*   **Co-Design & Partnership:** We don't just deliver services; we design solutions *with* communities.\n*   **Intersectionality:** We recognize overlapping barriers (gender, race, disability) and tailor interventions accordingly.\n*   **Market-Systems Development:** We address root causes of market exclusion rather than just treating symptoms.\n*   **Digital Inclusion:** Bridging the digital divide to ensure everyone can participate in the modern economy.",
        impact: [
            { label: "Youth Placed", value: "1,200+" },
            { label: "Businesses Founded", value: "85" },
            { label: "Policy Wins", value: "12" }
        ],
        gallery: [
            { src: "/assets/gallery/community-1.jpg", caption: "Community Day Gathering" },
            { src: "/assets/gallery/community-3.jpg", caption: "Nutritional Support Distribution" },
            { src: "/assets/gallery/community-2.jpg", caption: "Orphan Care Mentorship" }
        ],
        subPrograms: [
            {
                id: "youth-for-youth",
                title: "Youth For Youth",
                description: "Who We Serve: Black, Racialized, Immigrant Youth Seeking Meaningful Employment — Global Standard skill and Clear Pathways to Work in Canada and Beyond.",
                image: "/assets/program-youth.jpg",
                link: "/programs/youth-for-youth"
            }
        ]
    },
    {
        id: "human-rights-advocacy",
        pillar: "inclusive-development",
        category: "Justice",
        title: "Human Rights & Advocacy",
        description: "Capacity building and ending Gender-Based Violence through systemic reform and legal support.",
        image: "/assets/program-advocacy.jpg",
        color: "#a855f7",
        content: "Challenging systems to protect the vulnerable. Specialized services for GBV healing and legal aid.",
        challenge: "Systemic racism and gender-based violence leave communities in cycles of trauma.",
        solution: "Healing spaces, short-term overstay support, and legal aid referrals for survivors.",
        impact: [
            { label: "Legal Wins", value: "45" },
            { label: "Survivors Supported", value: "1,500+" }
        ],
        subPrograms: [
            {
                id: "ending-gbv",
                title: "Ending Gender-Based Violence",
                description: "Using Support & Healing to break cycles of abuse.",
                image: "/assets/program-advocacy.jpg",
                link: "/programs/ending-gbv",
                content: "We implement a survivor-centric model that prioritizes safety, dignity, and autonomy.",
                challenge: "Systemic silence and lack of culturally safe resources trap women in cycles of violence.",
                solution: "A holistic 'Support & Healing' framework integrating crisis intervention, counseling, and long-term rehabilitation.",
                impact: [
                    { label: "Survivors Safe", value: "850+" },
                    { label: "Healing Circles", value: "Weekly" }
                ]
            },
            {
                id: "overstay-support",
                title: "Short Term Overstay Support",
                description: "Emergency regularization assistance and advocacy.",
                image: "/assets/program-advocacy.jpg",
                link: "/programs/overstay-support",
                content: "Navigating immigration systems without status is a perilous journey. We provide discreet, non-judgmental support.",
                challenge: "Undocumented individuals face extreme vulnerability, exploitation, and exclusion from health services.",
                solution: "Emergency stabilization support and direct advocacy channels for regularization.",
                impact: [
                    { label: "Status Resolved", value: "120+" },
                    { label: "Emergency Aid", value: "24/7" }
                ]
            },
            {
                id: "confidential-counselling",
                title: "Confidential Counselling",
                description: "Trauma-informed mental health support in a safe space.",
                image: "/assets/program-advocacy.jpg",
                link: "/programs/confidential-counselling",
                content: "Mental health is the cornerstone of sovereignty. Our confidential counseling services offer culturally responsive therapy.",
                challenge: "Cultural stigma and lack of representation in mental health care prevent community members from seeking help.",
                solution: "Culturally-matched clinical counseling in a strictly confidential, non-institutional environment.",
                impact: [
                    { label: "Sessions Held", value: "2,500+" },
                    { label: "Client Rating", value: "4.9/5" }
                ]
            },
            {
                id: "recuperating-rebuilding",
                title: "Recuperating & Rebuilding",
                description: "Holistic recovery programs for survivors.",
                image: "/assets/program-advocacy.jpg",
                link: "/programs/recuperating-rebuilding",
                content: "Recovery is not just about survival; it's about thriving. Our R&R program focuses on economic empowerment, housing stability, and social reintegration.",
                challenge: "Survivors often face economic destitution and social isolation after escaping crisis situations.",
                solution: "A comprehensive rebuilding protocol including skills training, housing advocacy, and financial literacy.",
                impact: [
                    { label: "Lives Rebuilt", value: "400+" },
                    { label: "Jobs Secured", value: "85%" }
                ]
            },
            {
                id: "legal-aid",
                title: "Legal Aid Referrals",
                description: "Direct access to specialized human rights immigration lawyers.",
                image: "/assets/program-advocacy.jpg",
                link: "/programs/legal-aid",
                content: "Access to justice should not be determined by wealth. We bridge the gap between our community and specialized human rights lawyers.",
                challenge: "The complexity and cost of the legal system effectively bar marginalized communities from justice.",
                solution: "A vetted network of pro-bono and low-bono human rights attorneys dedicated to our mission.",
                impact: [
                    { label: "Cases Referred", value: "600+" },
                    { label: "Success Rate", value: "78%" }
                ]
            }
        ]
    },
    {
        id: "poverty-reduction",
        pillar: "inclusive-development",
        category: "Empowerment",
        title: "Poverty Reduction & Financial Literacy",
        description: "Breaking cycles of poverty through financial education, benefits navigation, and skills training.",
        image: "/assets/program-youth.jpg",
        color: "#10b981",
        content: "## Sustainable Livelihoods in Niagara\nCharity solves immediate hunger, but **justice solves poverty**. KAWAC's poverty reduction strategy focuses on equipping low-income residents with the tools, knowledge, and assets needed to achieve long-term financial sovereignty.",
        challenge: "## The Cycle of Dependency\nComplex bureaucracy and lack of financial literacy keep many Niagara families trapped in generational poverty, unable to build assets or savings.",
        solution: "## Asset-Based Community Development\nWe move beyond handouts to 'hand-ups', focusing on income maximization, tax filing assistance, and connecting clients to living-wage employment pathways.",
        impact: [
            { label: "Benefits Accessed", value: "$450k" },
            { label: "Tax Returns Filed", value: "1,200" },
            { label: "Families Stabilized", value: "800+" }
        ]
    },
    {
        id: "acb-community-programs",
        pillar: "inclusive-development",
        category: "Culture",
        title: "ACB Community Programs",
        description: "Culturally affirming services and advocacy for the African, Caribbean, and Black community.",
        image: "/assets/gallery/community-2.jpg",
        color: "#be185d",
        content: "## Strengthening the ACB Community in Niagara\nKAWAC is proudly led by and for the **African, Caribbean, and Black (ACB)** community. We create safe spaces for culture, healing, and empowerment.",
        challenge: "## Systemic Exclusion\nThe ACB community in Niagara has historically been underserved and underrepresented in mainstream social service organizations.",
        solution: "## 'For Us, By Us'\nWe build infrastructure that celebrates Black excellence and resilience, ensuring that our community has a voice and a seat at the table in regional planning.",
        impact: [
            { label: "Youth Mentored", value: "120+" },
            { label: "Events Hosted", value: "Monthly" },
            { label: "Community", value: "United" }
        ]
    }
];

export function getProgramsByPillar(pillar: Program["pillar"]): Program[] {
    return programsData.filter(p => p.pillar === pillar);
}

export function getAllProgramsFlat(): Program[] {
    return programsData;
}

export function findProgramById(id: string): Program | undefined {
    const parent = programsData.find(p => p.id === id);
    if (parent) return parent;

    for (const p of programsData) {
        if (p.subPrograms) {
            const sub = p.subPrograms.find(s => s.id === id);
            if (sub) {
                return {
                    ...p,
                    id: sub.id,
                    title: sub.title,
                    description: sub.description,
                    image: sub.image,
                    content: sub.content || p.content,
                    challenge: sub.challenge || p.challenge,
                    solution: sub.solution || p.solution,
                    impact: sub.impact || p.impact,
                };
            }
        }
    }
    return undefined;
}
