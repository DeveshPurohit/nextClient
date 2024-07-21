"use server"

export async function GetWeather(city: string) {
    const result = await fetch(`http://localhost:8080/api/weather?city=${city}`, {cache: "no-store"});
    const res = await result.json();
    
    return res;
  }
  
export async function GetNews() {
    const result = await fetch('http://localhost:8080/api/news', {cache: "no-store"});
    const res = await result.json();
    
    return res;
  }
  