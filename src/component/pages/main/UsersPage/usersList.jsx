import React, { Component, useState } from "react";

let thTexts = ["S/N", "Student Name", "Level", "Last Active", "Status", "Actions"]
let studentInfo = [
    {
        stuName : "Obinna", 
        stuEmail : "e.rod@academix.edu",
        stuImgUrl : ("https://lh3.googleusercontent.com/aida-public/AB6AXuB_caB_pPMVnO0QTyPZMzQQYeaY6kskyBr2HjgXQysSAE4J6gX3uq30plt__AyJrGnLd0io_CqVOr1w5KZ9r_x46aQV0bzM4jC6EqvFTlRIM2Q6bEGuRH61j8dVit6PTivjvQXKzLG8sOVlKNq0ANzH--qnTsJXVu8Jq00fZPUGHwRrahKkMxIHXvO7KOSpvo-iiUCp1ZYfkpBivsiQ3wlZEly-LHxOB2cObwxLZE81Mnh4eSIWLGVd8QB9D_DjLLtmFsr-0czzgknA"),
        level : 100
    },
    {
        stuName : "Britney", 
        stuEmail : "e.rod@academix.edu",
        stuImgUrl : ("https://lh3.googleusercontent.com/aida-public/AB6AXuB_caB_pPMVnO0QTyPZMzQQYeaY6kskyBr2HjgXQysSAE4J6gX3uq30plt__AyJrGnLd0io_CqVOr1w5KZ9r_x46aQV0bzM4jC6EqvFTlRIM2Q6bEGuRH61j8dVit6PTivjvQXKzLG8sOVlKNq0ANzH--qnTsJXVu8Jq00fZPUGHwRrahKkMxIHXvO7KOSpvo-iiUCp1ZYfkpBivsiQ3wlZEly-LHxOB2cObwxLZE81Mnh4eSIWLGVd8QB9D_DjLLtmFsr-0czzgknA"),
        level : 300
    },
    {
        stuName : "Fanny", 
        stuEmail : "e.rod@academix.edu",
        stuImgUrl : ("https://lh3.googleusercontent.com/aida-public/AB6AXuB_caB_pPMVnO0QTyPZMzQQYeaY6kskyBr2HjgXQysSAE4J6gX3uq30plt__AyJrGnLd0io_CqVOr1w5KZ9r_x46aQV0bzM4jC6EqvFTlRIM2Q6bEGuRH61j8dVit6PTivjvQXKzLG8sOVlKNq0ANzH--qnTsJXVu8Jq00fZPUGHwRrahKkMxIHXvO7KOSpvo-iiUCp1ZYfkpBivsiQ3wlZEly-LHxOB2cObwxLZE81Mnh4eSIWLGVd8QB9D_DjLLtmFsr-0czzgknA"),
        level : 500
    }
]
export { thTexts, studentInfo }