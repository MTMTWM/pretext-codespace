var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "",
  "body": "       Midterm with Solutions    Prove that if and , then .    If , then , write . If , then , write . Thus, . Therefore, , showing that .      Prove that if , then there exists a prime satisfying . (Hint: Consider the number .)    always holds and since , so that . In particular, for all . If is prime, we are done. If not, then by the FToA it has a prime factorization and each of those primes must be greater than (or it would divide and , an impossibility). Those primes must also be less than because they divide . Hence each of those primes lie between and .      Show your Euclidean Algorithm skills by using it to find . Then use the algorithm to write as a linear combination of 63 and 23.         Thus . Back‑substituting gives       Let be the prime factorization of . How many positive divisors does have? Explain your answer.    By Theorem 2.12, a divisor of must be of the form , where for each . There are choices for each . Each of these divisors is unique because they have a distinct prime factorization. Therefore, the total number of divisors is .      Prove that if then .    (Prime solution:) If we are done because . If , let be a prime dividing . By Theorem 2.27, or . Note that cannot divide both and since . In particular, . Therefore is not a prime divisor of . Since no prime dividing divides , we have .  (Non-prime way:)  because any common divisor of and must divide . Similarly, . Therefore, by Theorem 2.28, .      Show that if is composite, then has a prime divisor less than or equal to .    Write with integers . Then , so . Any prime divisor of satisfies and since divides , also divides .      Prove that there are infinitely many prime numbers. (You may use Euclid's proof.)    Assume there are finitely many primes, . Let . Since 2 is a prime the list of primes is not empty and , must be divisible by some prime by Theorem 2.1. But is not divisible by any of , because dividing by any of these gives a remainder of 1. Therefore, must be divisible by a prime not in the list , contradicting the assumption that we have a complete list of primes. Hence, there must be infinitely many primes.      Find the canonical residue of .    , , , , , . Since , .     "
},
{
  "id": "ex-1",
  "level": "2",
  "url": "#ex-1",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Prove that if and , then .    If , then , write . If , then , write . Thus, . Therefore, , showing that .   "
},
{
  "id": "ex-2",
  "level": "2",
  "url": "#ex-2",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Prove that if , then there exists a prime satisfying . (Hint: Consider the number .)    always holds and since , so that . In particular, for all . If is prime, we are done. If not, then by the FToA it has a prime factorization and each of those primes must be greater than (or it would divide and , an impossibility). Those primes must also be less than because they divide . Hence each of those primes lie between and .   "
},
{
  "id": "ex-3",
  "level": "2",
  "url": "#ex-3",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Show your Euclidean Algorithm skills by using it to find . Then use the algorithm to write as a linear combination of 63 and 23.         Thus . Back‑substituting gives    "
},
{
  "id": "ex-4",
  "level": "2",
  "url": "#ex-4",
  "type": "Worksheet Exercise",
  "number": "1.4",
  "title": "",
  "body": "  Let be the prime factorization of . How many positive divisors does have? Explain your answer.    By Theorem 2.12, a divisor of must be of the form , where for each . There are choices for each . Each of these divisors is unique because they have a distinct prime factorization. Therefore, the total number of divisors is .   "
},
{
  "id": "ex-5",
  "level": "2",
  "url": "#ex-5",
  "type": "Worksheet Exercise",
  "number": "1.5",
  "title": "",
  "body": "  Prove that if then .    (Prime solution:) If we are done because . If , let be a prime dividing . By Theorem 2.27, or . Note that cannot divide both and since . In particular, . Therefore is not a prime divisor of . Since no prime dividing divides , we have .  (Non-prime way:)  because any common divisor of and must divide . Similarly, . Therefore, by Theorem 2.28, .   "
},
{
  "id": "ex-6",
  "level": "2",
  "url": "#ex-6",
  "type": "Worksheet Exercise",
  "number": "1.6",
  "title": "",
  "body": "  Show that if is composite, then has a prime divisor less than or equal to .    Write with integers . Then , so . Any prime divisor of satisfies and since divides , also divides .   "
},
{
  "id": "ex-7",
  "level": "2",
  "url": "#ex-7",
  "type": "Worksheet Exercise",
  "number": "1.7",
  "title": "",
  "body": "  Prove that there are infinitely many prime numbers. (You may use Euclid's proof.)    Assume there are finitely many primes, . Let . Since 2 is a prime the list of primes is not empty and , must be divisible by some prime by Theorem 2.1. But is not divisible by any of , because dividing by any of these gives a remainder of 1. Therefore, must be divisible by a prime not in the list , contradicting the assumption that we have a complete list of primes. Hence, there must be infinitely many primes.   "
},
{
  "id": "ex-8",
  "level": "2",
  "url": "#ex-8",
  "type": "Worksheet Exercise",
  "number": "1.8",
  "title": "",
  "body": "  Find the canonical residue of .    , , , , , . Since , .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
