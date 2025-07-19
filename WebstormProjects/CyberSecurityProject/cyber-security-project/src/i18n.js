import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
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
            "industry_it": "ՏՏ", "industry_finance": "Ֆինանսներ", "industry_health": "Առողջապահություն", "industry_retail": "Մանրածախ առևտուր",
            "filter_step_2_title": "Ընտրեք ձեր գտնվելու վայրը",
            "location_armenia": "Հայաստան", "location_eua": "ԵԱՏՄ", "location_usa": "ԱՄՆ", "location_other": "Այլ",
            "filter_step_3_title": "Ընտրեք ձեր շուկայի տեղադիրքը",
            "market_armenia": "Հայաստան", "market_cis": "ԱՊՀ", "market_usa": "ԱՄՆ", "market_europe": "Եվրոպա",
            "filter_step_4_title": "Ընտրեք աշխատակիցների թիվը",
            "employees_1-50": "1-50", "employees_51-200": "51-200", "employees_201-1000": "201-1000", "employees_1000_plus": "1000+",

            // Новые необязательные поля
            "filter_step_5_title": "Ընտրեք ստանդարտներ (ոչ պարտադիր)",
            "standard_iso27001": "ISO 27001", "standard_soc2": "SOC 2", "standard_gdpr": "GDPR", "standard_nist": "NIST",
            "filter_step_6_title": "Ընտրեք շրջանակներ (ոչ պարտադիր)",
            "framework_cobit": "COBIT", "framework_cis": "CIS Controls", "framework_owasp": "OWASP ASVS",

            "filter_submit_button": "Պատրաստ է",

            // Переводы для страницы выбора типа теста
            "test_type_selection_title": "Ընտրեք թեստի տարբերակը",
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
            // Новая структура для всех вопросов
            "quiz_questions": [
                {
                    "questionText": "Ձեր ՏՏ ոլորտի ընկերությունը պահանջու՞մ է SOC 2 սերտիֆիկացում:",
                    "filters": {
                        "industry": ["it"], "location": ["usa", "other"], "marketLocation": ["usa", "europe"], "employeeCount": ["51-200", "201-1000", "1000_plus"],
                        "standard": ["soc2"] // Необязательный фильтр
                    },
                    "answerOptions": [
                        { "answerText": "Այո, դա կարևոր է մեր հաճախորդների համար", "isCorrect": true },
                        { "answerText": "Ոչ, մենք այլ ստանդարտներ ենք օգտագործում", "isCorrect": false }
                    ]
                },
                {
                    "questionText": "Հայաստանում գործող ֆինանսական ընկերության համար ո՞ր օրենքն է կարևոր:",
                    "filters": {
                        "industry": ["finance"], "location": ["armenia"], "marketLocation": ["armenia", "cis"], "employeeCount": ["1-50", "51-200"]
                    },
                    "answerOptions": [
                        { "answerText": "ՀՀ օրենքը «Անձնական տվյալների պաշտպանության մասին»", "isCorrect": true },
                        { "answerText": "GDPR", "isCorrect": false }
                    ]
                }
            ]
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
