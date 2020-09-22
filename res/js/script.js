const EVERY_DAY_SPENDING = 15.3



let userName = "Andy"

let userAge = 45

let userBalance = 12000

let userIsAlive = true

let userPets = ["Cat", "Dog"]

let everyDaySpendingPerPet = 6



console.log("User Name", userName)

console.log("User Age", userAge)

console.log("User Balance", userBalance)

console.log("User Is Alive", userIsAlive)

console.log("User Pets", userPets)



userName = "Andrew"

userAge = 46

userBalance += 15.7;



userPets.push("Hamster")

everyDaySpendingPerPet += 7.1



userPets.pop()

userPets.pop()

everyDaySpendingPerPet = 2.4



let daysSurvived = 0

while (userBalance > 0) {



	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length

	userBalance -= spending

	daysSurvived++

}

userIsAlive = false



console.log("User survived for " + daysSurvived + " days, RIP")

let i = 1

/*while (i <= 1000){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz")
    }
    else if(i%3 == 0 && i%5 != 0){
        console.log("Fizz")
    }
    else if(i%3 != 0 && i%5 == 0){
        console.log("Buzz")
    }
    else console.log(i)

    i++
}

let fiboStart = [0, 1]
console.log("Fibonacci task")
for(let i = 1; fiboStart.length <= 100; i++){
    fiboStart.push(fiboStart[i-1]+fiboStart[i])
}
console.log(fiboStart)

let primes = [2]
let nextPrime = 3
let n = 200
console.log("Prime numbers")
while(nextPrime < n)
    {
        var sqrt = Math.floor(Math.sqrt(nextPrime))
        let isPrime = Boolean(1)
        for(let i = 0; Math.floor(primes[i]) <= sqrt; i++){
            if(nextPrime % primes[i] == 0){
                isPrime = Boolean(0)
                break
            }
        }
        if (isPrime){
            primes.push(nextPrime)
        }
        nextPrime+=2
        }
console.log(primes)*/
