export interface LandingContent {
    schoolName: string;
    tagline: string;
    bannerImage: string;
    courses: string[];
}

export const landingData: LandingContent = {
    schoolName: "Sunrise Sollege",
    tagline: "Empowering minds since 1995",
    bannerImage:
        "https://images.unsplash.com/photo-1549861833-7a62a4a84484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8c2Nob29sJTIwY2FtcHVzfHwwfHx8fDE2MjY3ODIyMjQ&ixlib=rb-1.2.1&q=80&w=1080",
    courses: ["Arts", "Commerce", "Science"],
}