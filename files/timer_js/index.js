//Timer fields
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

//Buttons
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const newButton = document.querySelector('.new')

//Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clearFields()
})

newButton.addEventListener('click', () => {
    clearInterval(interval)
    counter++
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add('results_info')
    let h,
        m,
        s,
        ml
    if(millisecond <= 9)
    {
        ml = "0" + millisecond        
    }
    if(millisecond > 9)
    {
        ml = millisecond  
    }
    
    //seconds
    if(second <= 9)
    {
        s = "0" + second        
    }
    if(second > 9)
    {
        s = second  
    }
    
    //minutes
    if(minute <= 9)
    {
        m = "0" + minute        
    }
    if(minute > 9)
    {
        m = minute  
    }
    
    //hours
    if(hour <= 9)
    {
        h = "0" + hour        
    }
    if(hour > 9)
    {
        h = hour  
    }
    block.innerText = `Result ${counter}: ${h} : ${m} : ${s} : ${ml}`
    results.append(block)
    clearFields()
    interval = setInterval(startTimer, 10)
})

//Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0

//start timer function
function startTimer(){
    millisecond++
    
    //milliseconds
    if(millisecond <= 9)
    {
        millisecondElement.innerText = "0" + millisecond        
    }
    if(millisecond > 9)
    {
        millisecondElement.innerText = millisecond  
    }
    if(millisecond > 99)
    {
        second++
        secondElement.innerText = "0" + second    
        millisecond = 0
        millisecondElement.innerText = "0" + millisecond  
    }
    
    //seconds
    if(second <= 9)
    {
        secondElement.innerText = "0" + second        
    }
    if(second > 9)
    {
        secondElement.innerText = second  
    }
    if(second > 60)
    {
        minute++
        minuteElement.innerText = "0" + minute    
        second = 0
        secondElement.innerText = "0" + second  
    }
    
    //minutes
    if(minute <= 9)
    {
        minuteElement.innerText = "0" + minute        
    }
    if(minute > 9)
    {
        minuteElement.innerText = minute  
    }
    if(minute > 60)
    {
        hour++
        hourElement.innerText = "0" + minute    
        minute = 0
        minuteElement.innerText = "0" + minute  
    }
    
    //hours
    if(hour <= 9)
    {
        hourElement.innerText = "0" + hour        
    }
    if(hour > 9)
    {
        hourElement.innerText = hour  
    }
}

//function for clearing fields for stop button
function clearFields(){
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    millisecondElement.textContent = "00"
    secondElement.textContent = "00"
    minuteElement.textContent = "00"
    hourElement.textContent = "00"
}