import React from "react";
import Bio from "../../components/Bio";

const bods = [
    {
        "name": "Rumpel Stiltskin",
        "bio": "Rumpel is a renowned spinner with over 200 years of experience in spinning straw to gold.",
        "photo": null,
    },
    {
        "name": "Tom Brown",
        "bio": "Tom is a renowned chef and restaurateur with over 20 years of experience in the culinary industry. He has owned and operated several successful restaurants and has won numerous awards",
        "photo": null,
    },
    
    {
        "name": "Sarah Williams",
        "bio": "Sarah is a successful marketing executive with over 15 years of experience in the field. She has a strong background in digital marketing and is an expert in developing and executing effective marketing strategies. Sarah is known for her innovative ideas and ability to understand and connect with target audiences. In her free time, she enjoys traveling and exploring new cultures.",
        "photo": null,
    },
    
    {
        "name": "Bob Johnson",
        "bio": "Bob is a talented artist who has been working as a professional graphic designer for the past 10 years. He has a passion for creativity and is known for his innovative design solutions. Bob has worked with many high-profile clients and has won several awards for his exceptional work. In his free time, he enjoys exploring new artistic mediums and pushing the boundaries of traditional design.",
        "photo": null,
    },
    
    {
        "name": "Jane Smith",
        "bio": "Jane is a highly skilled and dedicated physician who has been practicing medicine for the past 15 years. She completed her residency in Internal Medicine and has since been working as a General Practitioner. Jane is known for her compassionate bedside manner and commitment to providing the best care to her patients. She also has a strong interest in preventative medicine and encourages her patients to adopt healthy lifestyle habits.",
        "photo": null,
    },
    
    {
        "name": "John Doe",
        "bio": "John is a seasoned entrepreneur with over 20 years of experience in the tech industry. He is the founder and CEO of XYZ Inc., a successful software company that specializes in developing innovative solutions for businesses. John is known for his sharp business acumen, strategic thinking, and passion for technology.",
        "photo": "Link to photo",
    },
]

const BoardOfDirectors=()=>{
    return (
        <div>
            <Bio bods={bods}/>
        </div>
    );
}

export default BoardOfDirectors;