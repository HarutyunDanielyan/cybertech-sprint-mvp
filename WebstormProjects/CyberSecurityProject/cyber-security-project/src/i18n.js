import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            // --- Homepage ---
            "main_title": "Your security is our priority",
            "main_subtitle": "A modern platform for analyzing and monitoring your website's cybersecurity.",
            // --- Navigation ---
            "nav_home": "Home",
            "nav_quiz": "Take Quiz",
            "nav_register": "Login/Register",
            "nav_profile": "My Profile",
            "nav_logout": "Logout",

            // --- Register Page ---
            "register_title": "Create Account",
            "register_email_label": "Email Address",
            "register_password_label": "Password",
            "register_who_are_you": "Who are you?",
            "register_role_client": "Client",
            "register_role_auditor": "Auditor",
            "register_button": "Register",
            "register_have_account": "Already have an account?",
            "register_login_link": "Login",
            "register_success_message": "You have successfully registered.",
            // --- Login Page ---
            "login_title": "Login",
            "login_button": "Login",
            "login_no_account": "Don't have an account?",
            "login_register_link": "Create one",
            "login_success_message": "You have successfully logged in.",
            // --- Filter Page ---
            "filter_step_1_title": "Select your industry",
            "industry_it": "IT", "industry_finance": "Finance", "industry_health": "Healthcare", "industry_retail": "Retail",
            "filter_step_2_title": "Select your location",
            "location_armenia": "Armenia", "location_eua": "EAEU", "location_usa": "USA", "location_other": "Other",
            "filter_step_3_title": "Select your market location",
            "market_armenia": "Armenia", "market_cis": "CIS", "market_usa": "USA", "market_europe": "Europe",
            "filter_step_4_title": "Select number of employees",
            "employees_1-50": "1-50", "employees_51-200": "51-200", "employees_201-1000": "201-1000", "employees_1000_plus": "1000+",
            "filter_step_5_title": "Select standards (optional)",
            "standard_iso27001": "ISO 27001", "standard_soc2": "SOC 2", "standard_gdpr": "GDPR", "standard_nist": "NIST",
            "filter_step_6_title": "Select frameworks (optional)",
            "framework_cobit": "COBIT", "framework_cis": "CIS Controls", "framework_owasp": "OWASP ASVS",
            "filter_submit_button": "Ready",
            "try_again_button": "Help me 😂",
            // --- Test Type Selection ---
            "test_type_selection_title": "Select implementation plan option",
            "test_type_our_suggestion": "Suggested Option (based on 4 criteria)",
            "test_type_our_suggestion_desc": "A test based on your core business parameters.",
            "test_type_client_choice": "Your Option (based on 6 criteria)",
            "test_type_client_choice_desc": "A test that includes your additional choices of standards and frameworks.",
            "filter_label_industry": "Industry",
            "filter_label_location": "Location",
            "filter_label_market": "Market",
            "filter_label_employees": "Employees",
            "filter_label_standard": "Standard",
            "filter_label_framework": "Framework",
            // --- Dashboard ---
            "dashboard_title": "Compliance Dashboard",
            "dashboard_welcome": "Welcome back! Choose a compliance quiz to assess your organization.",
            "last_login": "Last login",
            "completed_quizzes": "Completed Quizzes",
            "in_progress": "In Progress",
            "avg_score": "Avg. Score",
            "frameworks": "Frameworks",
            "available_quizzes": "Available Compliance Quizzes",
            "filter_by": "Filter by",
            "eu_regulation": "EU Regulation",
            "iso_standard": "ISO Standard",
            "multi_framework": "Multi-Framework",
            "gdpr_desc": "Assess your organization's compliance with the General Data Protection Regulation.",
            "iso_desc": "Evaluate your information security management system against ISO 27001 standards.",
            "combined_desc": "Comprehensive assessment covering GDPR, ISO 27001, and NIS 2 requirements.",
            "continue": "Continue",
            "start": "Start Quiz",
            "category_gdpr": "GDPR Assessment",
            "quiz_points": "points",
            "score_excellent": "Excellent compliance",
            "score_good": "Good compliance with minor gaps",
            "score_moderate": "Moderate compliance, improvements needed",
            "score_poor": "Poor compliance, major remediation needed",
            "test_not_ready_message": "The test for the selected standard is not ready yet. Only GDPR is currently available.",
            "nav_product": "Product",
            "nav_solutions": "Solutions",
            "nav_customers": "Customers",
            "nav_resources": "Resources",
            "nav_company": "Company",
            "nav_login": "Login",
            "nav_register_button": "Register",
            "nav_where_to_start": "Where to start",
            "compatibility_title": "Compliance",
            "quiz_by_category": {
                "gdpr": [
                    // --- Полный тест GDPR на английском ---
                    {
                        "questionText": "How do you determine the lawful basis for processing personal data?",
                        "reference": "GDPR Article 6 – Lawfulness of processing",
                        "answerOptions": [
                            { "answerText": "Documented procedures justify lawful basis for each processing activity", "points": 15 },
                            { "answerText": "Lawful basis generally understood but not always documented", "points": 8 },
                            { "answerText": "Consent or legitimate interest assumed without analysis", "points": 3 },
                            { "answerText": "Lawful basis not considered during processing", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How do you obtain and manage consent for data processing?",
                        "reference": "GDPR Article 7 – Conditions for consent",
                        "answerOptions": [
                            { "answerText": "Clear mechanisms with withdrawal options and records", "points": 15 },
                            { "answerText": "Consent obtained but lacks clarity or withdrawal process", "points": 8 },
                            { "answerText": "Pre-ticked boxes or implied consent used", "points": 3 },
                            { "answerText": "No explicit consent procedures in place", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How do you handle data subject access requests (DSARs)?",
                        "reference": "GDPR Article 15 – Right of access",
                        "answerOptions": [
                            { "answerText": "Automated DSAR response system within 30 days", "points": 15 },
                            { "answerText": "Manual handling, typically within 30 days", "points": 8 },
                            { "answerText": "Responses exceed the 30-day limit", "points": 3 },
                            { "answerText": "No formal process for access requests", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How do you handle requests to correct inaccurate personal data?",
                        "reference": "GDPR Article 16 – Right to rectification",
                        "answerOptions": [
                            { "answerText": "Automated correction process with third-party notifications", "points": 15 },
                            { "answerText": "Manual corrections without third-party updates", "points": 8 },
                            { "answerText": "Inconsistent or slow correction process", "points": 3 },
                            { "answerText": "No procedure for data correction", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How do you handle requests for data deletion?",
                        "reference": "GDPR Article 17 – Right to erasure",
                        "answerOptions": [
                            { "answerText": "Automated deletion with third-party notifications", "points": 15 },
                            { "answerText": "Manual deletion without full third-party coverage", "points": 8 },
                            { "answerText": "Partial deletion across systems", "points": 3 },
                            { "answerText": "No erasure procedures in place", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How do you handle data portability requests?",
                        "reference": "GDPR Article 20 – Right to data portability",
                        "answerOptions": [
                            { "answerText": "Data provided in structured, machine-readable format within 30 days", "points": 15 },
                            { "answerText": "Data provided, but not always in required format", "points": 8 },
                            { "answerText": "Export available but unstructured", "points": 3 },
                            { "answerText": "No procedure for data portability", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "What is your process for detecting and reporting data breaches?",
                        "reference": "GDPR Article 33 – Notification of personal data breach",
                        "answerOptions": [
                            { "answerText": "Automated detection and 72-hour notification protocol", "points": 15 },
                            { "answerText": "Detection in place, but timing is undefined", "points": 8 },
                            { "answerText": "Case-by-case handling without formal process", "points": 3 },
                            { "answerText": "No detection or notification process", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "Do you conduct DPIAs for high-risk processing?",
                        "reference": "GDPR Article 35 – Data protection impact assessment",
                        "answerOptions": [
                            { "answerText": "Systematic DPIAs with regular review", "points": 15 },
                            { "answerText": "DPIAs conducted occasionally", "points": 8 },
                            { "answerText": "Basic assessments, not formal DPIAs", "points": 3 },
                            { "answerText": "No impact assessments performed", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "Do you have a designated DPO?",
                        "reference": "GDPR Articles 37–39 – DPO designation",
                        "answerOptions": [
                            { "answerText": "Qualified DPO with independence and resources", "points": 15 },
                            { "answerText": "Assigned duties, but lacking qualification or independence", "points": 8 },
                            { "answerText": "Privacy tasks assigned, no formal DPO", "points": 3 },
                            { "answerText": "No privacy officer assigned", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "Do you maintain processing records?",
                        "reference": "GDPR Article 30 – Records of processing activities",
                        "answerOptions": [
                            { "answerText": "Comprehensive, up-to-date records for all activities", "points": 15 },
                            { "answerText": "Incomplete or outdated records", "points": 8 },
                            { "answerText": "Basic documentation only", "points": 3 },
                            { "answerText": "No processing records maintained", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How are international data transfers handled?",
                        "reference": "GDPR Articles 44–50 – Data transfers",
                        "answerOptions": [
                            { "answerText": "Appropriate safeguards in place for all transfers", "points": 15 },
                            { "answerText": "Some safeguards, not comprehensive", "points": 8 },
                            { "answerText": "Transfers occur without safeguards", "points": 3 },
                            { "answerText": "No procedures for international transfers", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How do you embed privacy into systems and processes?",
                        "reference": "GDPR Article 25 – Privacy by design and by default",
                        "answerOptions": [
                            { "answerText": "Integrated from design stage with data minimization", "points": 15 },
                            { "answerText": "Considered in some projects", "points": 8 },
                            { "answerText": "Added post-development", "points": 3 },
                            { "answerText": "Not considered during design", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How do you manage data processor contracts?",
                        "reference": "GDPR Article 28 – Processor responsibilities",
                        "answerOptions": [
                            { "answerText": "Complete contracts with required GDPR clauses", "points": 15 },
                            { "answerText": "Basic contracts missing clauses", "points": 8 },
                            { "answerText": "Informal processor relationships", "points": 3 },
                            { "answerText": "No formal agreements in place", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How is data retention managed?",
                        "reference": "GDPR Article 5(1)(e) – Storage limitation",
                        "answerOptions": [
                            { "answerText": "Documented schedules and automated deletion", "points": 15 },
                            { "answerText": "Manual deletion based on retention policy", "points": 8 },
                            { "answerText": "Data kept indefinitely without plan", "points": 3 },
                            { "answerText": "No retention policy", "points": 0 }
                        ]
                    },
                    {
                        "questionText": "How is GDPR awareness ensured across staff?",
                        "reference": "GDPR Article 32 – Security of processing",
                        "answerOptions": [
                            { "answerText": "Regular, comprehensive training and testing", "points": 15 },
                            { "answerText": "Basic or irregular training sessions", "points": 8 },
                            { "answerText": "Informal awareness only", "points": 3 },
                            { "answerText": "No GDPR training provided", "points": 0 }
                        ]
                    }
                ]
            }
        }
    },
    hy: {
        translation: {
            // --- Главная страница ---
            "main_title": "Ձեր անվտանգությունը մեր առաջնահերթությունն է",
            "main_subtitle": "Ժամանակակից հարթակ՝ ձեր կայքի կիբերանվտանգության վերլուծության և մոնիթորինգի համար։",
            "start_audit_button": "Սկսել աուդիտը",
            "feature_audit_title": "Ավտոմատ աուդիտ",
            "feature_audit_desc": "Համակարգը ավտոմատ կստուգի ձեր կայքը հարյուրավոր պարամետրերով։",
            "feature_checklists_title": "Հարմարավետ ցուցակներ",
            "feature_checklists_desc": "Ստուգեք անվտանգությունը ձեռքով՝ օգտագործելով պատրաստի ցուցակները։",
            "feature_reports_title": "Ակնառու հաշվետվություններ",
            "feature_reports_desc": "Ստացեք մանրամասն հաշվետվություններ առաջարկություններով։",
            "nav_product": "Ապրանք",
            "nav_solutions": "Լուծումներ",
            "nav_customers": "Հաճախորդներ",
            "nav_resources": "Ռեսուրսներ",
            "nav_company": "Ընկերություն",
            "nav_register_button": "Գրանցում", // Կոճակ
            "nav_where_to_start": "Ինչից սկսել", // Նոր էջ
            "compatibility_title": "Համատեղելիություն",
            "try_again_button": "Օգնեք ինձ 😂",
            // --- Навигация ---
            "nav_home": "Գլխավոր",
            "nav_quiz": "Անցնել հարցումը",
            "nav_login": "Մուտք",
            "nav_register": "Մուտք/Գրանցում",

            // --- Страница регистрации ---
            "register_title": "Ստեղծել հաշիվ",
            "register_email_label": "Էլ․ հասցե",
            "register_password_label": "Գաղտնաբառ",
            "register_who_are_you": "Ո՞վ եք դուք",
            "register_role_client": "Հաճախորդ",
            "register_role_auditor": "Աուդիտոր",
            "register_button": "Գրանցվել",
            "register_have_account": "Արդեն ունե՞ք հաշիվ։",
            "register_login_link": "Մուտք գործել",
            "register_success_message": "Դուք հաջողությամբ գրանցվել եք։",

            // --- Страница входа ---
            "login_title": "Մուտք գործել",
            "login_button": "Մուտք",
            "login_no_account": "Չունե՞ք հաշիվ։",
            "login_register_link": "Ստեղծել",
            "login_success_message": "Դուք հաջողությամբ մուտք գործեցիք։",

            // --- Опрос (Quiz) ---
            "quiz_question": "Հարց",
            "quiz_of": "/",
            "quiz_result_title": "Ձեր արդյունքը՝",
            "profession_selection_title": "Ընտրեք ձեր մասնագիտությունը",
            "profession_developer": "Ծրագրավորող",
            "profession_manager": "Մենեջեր",
            "profession_designer": "Դիզայներ",
            "profession_student": "Ուսանող",
            "no_questions_for_profession": "Այս կատեգորիայում ձեր մասնագիտության համար հարցեր չկան։",
            "back_to_professions": "Վերադառնալ մասնագիտություններ",
            "filter_step_1_title": "Ընտրեք ձեր ոլորտը",
            "industry_it": "ՏՏ",
            "industry_finance": "Ֆինանսներ",
            "industry_health": "Առողջապահություն",
            "industry_retail": "Մանրածախ առևտուր",
            "filter_step_2_title": "Ընտրեք ձեր գտնվելու վայրը",
            "location_armenia": "Հայաստան",
            "location_eua": "ԵԱՏՄ",
            "location_usa": "ԱՄՆ",
            "location_other": "Այլ",
            "filter_step_3_title": "Ընտրեք ձեր շուկայի տեղադիրքը",
            "market_armenia": "Հայաստան",
            "market_cis": "ԱՊՀ",
            "market_usa": "ԱՄՆ",
            "market_europe": "Եվրոպա",
            "filter_step_4_title": "Ընտրեք աշխատակիցների թիվը",
            "employees_1-50": "1-50",
            "employees_51-200": "51-200",
            "employees_201-1000": "201-1000",
            "employees_1000_plus": "1000+",

            // Новые необязательные поля
            "filter_step_5_title": "Ընտրեք ստանդարտներ (ոչ պարտադիր)",
            "standard_iso27001": "ISO 27001",
            "standard_soc2": "SOC 2",
            "standard_gdpr": "GDPR",
            "standard_nist": "NIST",
            "filter_step_6_title": "Ընտրեք շրջանակներ (ոչ պարտադիր)",
            "framework_cobit": "COBIT",
            "framework_cis": "CIS Controls",
            "framework_owasp": "OWASP ASVS",

            "filter_submit_button": "Պատրաստ է",

            // Переводы для страницы выбора типа теста
            "test_type_selection_title": "Ընտրեք իրականացման պլանի տարբերակը",
            "test_type_our_suggestion": "Առաջարկվող տարբերակ (4 չափանիշով)",
            "test_type_our_suggestion_desc": "Թեստ՝ հիմնված ձեր հիմնական բիզնես պարամետրերի վրա։",
            "test_type_client_choice": "Ձեր տարբերակը (6 չափանիշով)",
            "test_type_client_choice_desc": "Թեստ, որը ներառում է ստանդարտների և շրջանակների ձեր լրացուցիչ ընտրությունները։",

            // Метки для отображения в карточках
            "filter_label_industry": "Ոլորտ",
            "filter_label_location": "Գտնվելու վայր",
            "filter_label_market": "Շուկա",
            "filter_label_employees": "Աշխատակիցներ",
            "filter_label_standard": "Ստանդարտ",
            "filter_label_framework": "Շրջանակ",
            "nav_profile": "Իմ էջը", // Новый ключ для "Профиль"
            "nav_logout": "Դուրս գալ", // Новый ключ для "Выйти"

            "dashboard_title": "Համապատասխանության վահանակ",
            "dashboard_welcome": "Բարի վերադարձ։ Ընտրեք համապատասխանության թեստ՝ ձեր կազմակերպությունը գնահատելու համար",
            "last_login": "Վերջին մուտք",
            "completed_quizzes": "Ավարտված թեստերը",
            "in_progress": "Ընթացքի մեջ",
            "avg_score": "Միջին Միավոր",
            "frameworks": "Frameworks",
            "available_quizzes": "Հասանելի համապատասխանության թեստեր",
            "filter_by": "Զտել ըստ",
            "eu_regulation": "ԵՄ կանոնակարգ",
            "iso_standard": "ISO ստանդարտ",
            "multi_framework": "Multi-Framework",
            "gdpr_desc": "Գնահատեք ձեր կազմակերպության համապատասխանությունը «Տվյալների պաշտպանության ընդհանուր կանոնակարգին»",
            "iso_desc": "Գնահատեք ձեր տեղեկատվական անվտանգության կառավարման համակարգը ISO 27001 ստանդարտների համեմատ",
            "combined_desc": "Համապարփակ գնահատում, որը ներառում է GDPR, ISO 27001 և NIS 2 պահանջները",
            "continue": "Շարունակեք",
            "start": "Սկսեք վիկտորինան",

            "category_gdpr": "GDPR Գնահատում",
            "quiz_points": "միավոր",
            "score_excellent": "Գերազանց համապատասխանություն",
            "score_good": "Լավ համապատասխանություն՝ փոքր բացթողումներով",
            "score_moderate": "Միջին համապատասխանություն, անհրաժեշտ են բարելավումներ",
            "score_poor": "Վատ համապատասխանություն, անհրաժեշտ է լուրջ շտկում",

            "quiz_by_category": {
                "gdpr": [
                    // --- Полный тест GDPR на армянском ---
                    {
                        "questionText": "Ինչպե՞ս եք որոշում անձնական տվյալների մշակման օրինական հիմքը:",
                        "reference": "ՏՀՏԿ հոդված 6 – Մշակման օրինականությունը",
                        "answerOptions": [
                            {
                                "answerText": "Փաստաթղթավորված ընթացակարգերը հիմնավորում են մշակման յուրաքանչյուր գործունեության օրինական հիմքը",
                                "points": 15
                            },
                            {
                                "answerText": "Օրինական հիմքը ընդհանուր առմամբ հասկանալի է, բայց ոչ միշտ փաստաթղթավորված",
                                "points": 8
                            },
                            {
                                "answerText": "Համաձայնությունը կամ օրինական շահը ենթադրվում է առանց վերլուծության",
                                "points": 3
                            },
                            {"answerText": "Մշակման ընթացքում օրինական հիմքը հաշվի չի առնվում", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս եք ստանում և կառավարում տվյալների մշակման համաձայնությունը:",
                        "reference": "ՏՀՏԿ հոդված 7 – Համաձայնության պայմանները",
                        "answerOptions": [
                            {"answerText": "Հստակ մեխանիզմներ՝ հետկանչման տարբերակներով և գրանցումներով", "points": 15},
                            {
                                "answerText": "Համաձայնությունը ստացվել է, բայց պակասում է հստակությունը կամ հետկանչման գործընթացը",
                                "points": 8
                            },
                            {
                                "answerText": "Օգտագործվում են նախապես նշված վանդակներ կամ ենթադրյալ համաձայնություն",
                                "points": 3
                            },
                            {"answerText": "Գործողության մեջ չկան համաձայնության հստակ ընթացակարգեր", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս եք մշակում տվյալների սուբյեկտի մուտքի հարցումները (DSARs):",
                        "reference": "ՏՀՏԿ հոդված 15 – Մուտքի իրավունք",
                        "answerOptions": [
                            {"answerText": "Ավտոմատացված DSAR պատասխանման համակարգ 30 օրվա ընթացքում", "points": 15},
                            {"answerText": "Ձեռքով մշակում, սովորաբար 30 օրվա ընթացքում", "points": 8},
                            {"answerText": "Պատասխանները գերազանցում են 30-օրյա ժամկետը", "points": 3},
                            {"answerText": "Մուտքի հարցումների համար պաշտոնական գործընթաց չկա", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս եք մշակում ոչ ճշգրիտ անձնական տվյալները շտկելու հարցումները:",
                        "reference": "ՏՀՏԿ հոդված 16 – Ուղղման իրավունք",
                        "answerOptions": [
                            {"answerText": "Ավտոմատացված շտկման գործընթաց՝ երրորդ կողմի ծանուցումներով", "points": 15},
                            {"answerText": "Ձեռքով շտկումներ՝ առանց երրորդ կողմի թարմացումների", "points": 8},
                            {"answerText": "Անհամապատասխան կամ դանդաղ շտկման գործընթաց", "points": 3},
                            {"answerText": "Տվյալների շտկման ընթացակարգ չկա", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս եք մշակում տվյալների ջնջման հարցումները:",
                        "reference": "ՏՀՏԿ հոդված 17 – Ջնջման իրավունք",
                        "answerOptions": [
                            {"answerText": "Ավտոմատացված ջնջում՝ երրորդ կողմի ծանուցումներով", "points": 15},
                            {"answerText": "Ձեռքով ջնջում՝ առանց երրորդ կողմի ամբողջական ծածկույթի", "points": 8},
                            {"answerText": "Մասնակի ջնջում համակարգերում", "points": 3},
                            {"answerText": "Գործողության մեջ չկան ջնջման ընթացակարգեր", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս եք մշակում տվյալների տեղափոխելիության հարցումները:",
                        "reference": "ՏՀՏԿ հոդված 20 – Տվյալների տեղափոխելիության իրավունք",
                        "answerOptions": [
                            {
                                "answerText": "Տվյալները տրամադրվում են կառուցվածքային, մեքենայաընթեռնելի ձևաչափով 30 օրվա ընթացքում",
                                "points": 15
                            },
                            {"answerText": "Տվյալները տրամադրվում են, բայց ոչ միշտ պահանջվող ձևաչափով", "points": 8},
                            {"answerText": "Արտահանումը հասանելի է, բայց անկառուցվածքային", "points": 3},
                            {"answerText": "Տվյալների տեղափոխելիության ընթացակարգ չկա", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ո՞րն է ձեր գործընթացը տվյալների խախտումները հայտնաբերելու և հաղորդելու համար:",
                        "reference": "ՏՀՏԿ հոդված 33 – Անձնական տվյալների խախտման ծանուցում",
                        "answerOptions": [
                            {
                                "answerText": "Ավտոմատացված հայտնաբերում և 72-ժամյա ծանուցման արձանագրություն",
                                "points": 15
                            },
                            {"answerText": "Հայտնաբերումը առկա է, բայց ժամկետները սահմանված չեն", "points": 8},
                            {"answerText": "Դեպք առ դեպք մշակում՝ առանց պաշտոնական գործընթացի", "points": 3},
                            {"answerText": "Ոչ մի հայտնաբերման կամ ծանուցման գործընթաց չկա", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Իրականացնո՞ւմ եք DPIA-ներ բարձր ռիսկային մշակման համար:",
                        "reference": "ՏՀՏԿ հոդված 35 – Տվյալների պաշտպանության ազդեցության գնահատում",
                        "answerOptions": [
                            {"answerText": "Համակարգված DPIA-ներ՝ կանոնավոր վերանայումով", "points": 15},
                            {"answerText": "DPIA-ներն իրականացվում են երբեմն", "points": 8},
                            {"answerText": "Հիմնական գնահատումներ, ոչ պաշտոնական DPIA-ներ", "points": 3},
                            {"answerText": "Ազդեցության գնահատումներ չեն կատարվում", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ունե՞ք նշանակված DPO:",
                        "reference": "ՏՀՏԿ հոդվածներ 37–39 – DPO նշանակում",
                        "answerOptions": [
                            {"answerText": "Որակավորված DPO՝ անկախությամբ և ռեսուրսներով", "points": 15},
                            {
                                "answerText": "Նշանակված պարտականություններ, բայց պակասում է որակավորումը կամ անկախությունը",
                                "points": 8
                            },
                            {"answerText": "Գաղտնիության խնդիրներ են վերագրվում, DPO չկա", "points": 3},
                            {"answerText": "Գաղտնիության պատասխանատու նշանակված չէ", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Պահպանո՞ւմ եք մշակման գրառումներ:",
                        "reference": "ՏՀՏԿ հոդված 30 – Մշակման գործունեության գրառումներ",
                        "answerOptions": [
                            {"answerText": "Բոլոր գործունեությունների համապարփակ, արդիական գրառումներ", "points": 15},
                            {"answerText": "Թերի կամ հնացած գրառումներ", "points": 8},
                            {"answerText": "Միայն հիմնական փաստաթղթեր", "points": 3},
                            {"answerText": "Գործունեության վերաբերյալ գրառումներ չեն պահպանվում", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս են մշակվում միջազգային տվյալների փոխանցումները:",
                        "reference": "ՏՀՏԿ հոդվածներ 44–50 – Տվյալների փոխանցումներ",
                        "answerOptions": [
                            {"answerText": "Համապատասխան երաշխիքներ առկա են բոլոր փոխանցումների համար", "points": 15},
                            {"answerText": "Որոշ երաշխիքներ, ոչ համապարփակ", "points": 8},
                            {"answerText": "Փոխանցումներն իրականացվում են առանց երաշխիքների", "points": 3},
                            {"answerText": "Միջազգային փոխանցումների համար ընթացակարգեր չկան", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս եք ապահովում գաղտնիությունը համակարգերում և գործընթացներում:",
                        "reference": "ՏՀՏԿ հոդված 25 – Գաղտնիություն ըստ նախագծման և լռելյայն",
                        "answerOptions": [
                            {"answerText": "Ինտեգրված է նախագծման փուլից՝ տվյալների նվազեցումով", "points": 15},
                            {"answerText": "Հաշվի է առնվում որոշ նախագծերում", "points": 8},
                            {"answerText": "Ավելացվել է մշակումից հետո", "points": 3},
                            {"answerText": "Նախագծման ընթացքում հաշվի չի առնվում", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս եք կառավարում տվյալների պրոցեսորային պայմանագրերը:",
                        "reference": "ՏՀՏԿ հոդված 28 – Պրոցեսորի պարտականությունները",
                        "answerOptions": [
                            {"answerText": "Ամբողջական պայմանագրեր՝ պահանջվող ՏՀՏԿ դրույթներով", "points": 15},
                            {"answerText": "Հիմնական պայմանագրեր՝ առանց դրույթների", "points": 8},
                            {"answerText": "Ոչ պաշտոնական պրոցեսորային հարաբերություններ", "points": 3},
                            {"answerText": "Գործողության մեջ չկան պաշտոնական համաձայնագրեր", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս է կառավարվում տվյալների պահպանումը:",
                        "reference": "ՏՀՏԿ հոդված 5(1)(e) – Պահպանման սահմանափակում",
                        "answerOptions": [
                            {"answerText": "Փաստաթղթավորված ժամանակացույցեր և ավտոմատացված ջնջում", "points": 15},
                            {"answerText": "Ձեռքով ջնջում՝ հիմնված պահպանման քաղաքականության վրա", "points": 8},
                            {"answerText": "Տվյալները պահվում են անժամկետ՝ առանց պլանի", "points": 3},
                            {"answerText": "Պահպանման քաղաքականություն չկա", "points": 0}
                        ]
                    },
                    {
                        "questionText": "Ինչպե՞ս է ապահովվում ՏՀՏԿ-ի իրազեկումը աշխատակազմի շրջանում:",
                        "reference": "ՏՀՏԿ հոդված 32 – Մշակման անվտանգություն",
                        "answerOptions": [
                            {"answerText": "Կանոնավոր, համապարփակ ուսուցում և թեստավորում", "points": 15},
                            {"answerText": "Հիմնական կամ անկանոն ուսուցման դասընթացներ", "points": 8},
                            {"answerText": "Միայն ոչ պաշտոնական իրազեկում", "points": 3},
                            {"answerText": "ՏՀՏԿ-ի վերաբերյալ ուսուցում չի տրամադրվում", "points": 0}
                        ]
                    }
                ]
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'hy',
        fallbackLng: 'hy',
        interpolation: {
            escapeValue: false,
        },
        returnObjects: true,
    });

export default i18n;
