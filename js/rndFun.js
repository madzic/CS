function genQuote() {
    
    // document.getElementById('Sorted1a').innerHTML = document.getElementById('Igrac1a').value //quotes[randNum];
    // document.getElementById('Sorted1a').innerHTML = document.getElementById('Igrac1a').innerHTML;

// TIER 1

    var randNum = Math.floor(Math.random()*99+1 );

    if (randNum < 50) 
        {
        document.getElementById('Sorted1a').innerHTML = document.getElementById('Igrac1a').value;
        document.getElementById('Sorted1b').innerHTML = document.getElementById('Igrac1b').value;
        } 
    else 
        {
        document.getElementById('Sorted1a').innerHTML = document.getElementById('Igrac1b').value;
        document.getElementById('Sorted1b').innerHTML = document.getElementById('Igrac1a').value;
        }

// TIER 2

    var randNum = Math.floor(Math.random()*99+1 );

    if (randNum < 50) 
        {
        document.getElementById('Sorted2a').innerHTML = document.getElementById('Igrac2a').value;
        document.getElementById('Sorted2b').innerHTML = document.getElementById('Igrac2b').value;
        } 
    else 
        {
        document.getElementById('Sorted2a').innerHTML = document.getElementById('Igrac2b').value;
        document.getElementById('Sorted2b').innerHTML = document.getElementById('Igrac2a').value;
        }

// TIER 3

var randNum = Math.floor(Math.random()*99+1 );

if (randNum < 50) 
    {
    document.getElementById('Sorted3a').innerHTML = document.getElementById('Igrac3a').value;
    document.getElementById('Sorted3b').innerHTML = document.getElementById('Igrac3b').value;
    } 
else 
    {
    document.getElementById('Sorted3a').innerHTML = document.getElementById('Igrac3b').value;
    document.getElementById('Sorted3b').innerHTML = document.getElementById('Igrac3a').value;
    }

// TIER 4

var randNum = Math.floor(Math.random()*99+1 );

if (randNum < 50) 
    {
    document.getElementById('Sorted4a').innerHTML = document.getElementById('Igrac4a').value;
    document.getElementById('Sorted4b').innerHTML = document.getElementById('Igrac4b').value;
    } 
else 
    {
    document.getElementById('Sorted4a').innerHTML = document.getElementById('Igrac4b').value;
    document.getElementById('Sorted4b').innerHTML = document.getElementById('Igrac4a').value;
    }

// TIER 5

var randNum = Math.floor(Math.random()*99+1 );

if (randNum < 50) 
    {
    document.getElementById('Sorted5a').innerHTML = document.getElementById('Igrac5a').value;
    document.getElementById('Sorted5b').innerHTML = document.getElementById('Igrac5b').value;
    } 
else 
    {
    document.getElementById('Sorted5a').innerHTML = document.getElementById('Igrac5b').value;
    document.getElementById('Sorted5b').innerHTML = document.getElementById('Igrac5a').value;
    }

// TIER 6

var randNum = Math.floor(Math.random()*99+1 );

if (randNum < 50) 
    {
    document.getElementById('Sorted6a').innerHTML = document.getElementById('Igrac6a').value;
    document.getElementById('Sorted6b').innerHTML = document.getElementById('Igrac6b').value;
    } 
else 
    {
    document.getElementById('Sorted6a').innerHTML = document.getElementById('Igrac6b').value;
    document.getElementById('Sorted6b').innerHTML = document.getElementById('Igrac6a').value;
    }

}
