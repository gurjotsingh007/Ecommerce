import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhEQEw8VFRERFRkQGBgRERIbEBIQFRIYGRcVExMZHSghGRolJxoYITIhJSorLi4uFyszODMtNygtLisBCgoKDg0OGxAQGjcmHyYtLTY3Lys1LS0tNi8tLi8tKy01Ky01LS0tKy0tLS0tNS0vLS0tLS0tLS0rLS0tLS4rK//AABEIALEBHAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEEBQYIAwL/xABFEAACAgECAwUFBQMICQUAAAABAgADEQQSBSExBhMiQVEHMmFxgRQjQlKRsbLBJDVDYnOCk6EzRFN0orPC0vAlNFRjcv/EABkBAQEBAQEBAAAAAAAAAAAAAAAEAwIFAf/EACYRAQACAgEEAQQDAQAAAAAAAAABAgMRIQQSMUEiUWGhwYHh8DL/2gAMAwEAAhEDEQA/AINiIgIiICIiAiIgIiICIiAiJctobBWLduazkZHMAg48XpAtolSJSAiIgIiICIn0KyckDpzPLp84HzERAREQEREBERAREQEREBERAREQEREBERAREQEREBERATbOyRd6rUGPAwYZPhywIKuPNDjp9Zqc3z2eqDVqOXMWITy8trY/YZlnnVNu8f8A0wnHODAKdRUu1QcWV/iqcdceq/wIM18iS53G25eXhvBqbOdpsVSU5f1lFgP/AORI+7W8G+yXlVH3T/eJnyUn3fmOk5w5e7h9vTXLBxKmUm7MlRKTJ9nuFNqrlqHJfedvJax1Pz8h8Z8mYiNyRG3rwbg/ehrbCUoTqwGWY/lQeZmS7Q4p061itUNrE7VHNUTBw7fibmP85tdujHeLWg21adVwAOXesMgH4qOfzfPXE17t3SBXSfxb3HTy2rn+EmjL33iG007ay0yUlZSVMSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICStwPgqaZhbS57q6pdyNzIcKCGU+Y5t19ZF+lrDOik4DMFJ/KCQCcecl/geneusae0feUfd7seCyvJ2Mh8+XIjyI+Um6mZivDXFHK71H9FgcxdWRy5gkkE/oTMV7QuGG3SF8Evp27wcuew4Vwf8j/dmTvH3umHrfkjH4RTaf2hZk+IUB6bUYZVqnHX1QmRVt2zWW8xuJc/mUn0qEkADJPIAdSfQCbYPZxr+77zu0DYz3ZsHffLHTPwzmepa9a+ZSRWZ8NSEk32fcL2afviPHexPT+iU4X9TuP6SNbKyhKsMMpwQeoI6giTxwrRGumlAMBK0Hw9wGT9XfVNfVrhjcsPpqf8ATNg+K6wnkeqkJ+xBMB2s4PZqMuTtp09TODyLWWHmQoByByAyZtFBO/UL+S+wH+8iP/1zHdpbGalqK13Xaj7tVyOS8t7n0UD8XTnJqTMZOGto+KJJSfTDE+Z6aQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIlYF7wjhtmqsFNSg2EEgFlAwqknmZMvCg1lSM9bpZtCsrrhldRtPzBxkGRH2Va4aug0Vmy5X3Ki9bAoJdfqoYSc9MEsVXQHaw5buTqRyKsp5hgcgj4SHrJnhRgY1FzqtKn5he/LyKVoM/8cynG3FGm1Fp6JU5/VSAP8wJ5Jph9u0Q586tZ+oXTzH+163ueHFQf9PdXT/dG6w/uKPrJojd6R/vLWZ1Eyh3s5rhp9TRcUDitw2G3bc9ATt5nGc4HXE6Er4ppGIA12mJYgD+U07ix6DG7r5YnOnB1LX0KrhGa1AGIGEJsGGwfTr9J0q2j1AVlOn09h8wttirYfijI23PxJ6yjrYiZjbHDM8ueu22r77W6mzu1rJfaQjZQsg2lgcD3sbvrJ54eoeilwMh6kYFT5FBOeONoF1F6ivuwLXGw48GGPh+knT2aWtdwzTE9UD09f8AZ2Hby+RUfSOsrrHWY9PuGflK0+zffa05OftB+udLp5YcW1fc03MBmzaa0AGWd35BQBzz58vSZ0UE3a0eY1GD9NJpzLLWXLQr3OcKgyefiPPkq/EnkMSbfyj+GvpBWoqZGZHUq6naVYEMpHkQehnlLvimsa+229/ftdrG+DMxJEtJ7EIiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJWUiBlezOstp1WntprNlqWKyooJaznzQAczuGRy9Z0Hw7W1apRbU25TgEHO9HA9x1PNWHLrOcOH6xqLK7kOHqdbFPoyMCP2Tpjh2uTUVpehytqrZkehHQnzwcj6Tz+ujxOlGD3D5s0w+16F8+79oq/xaFYfX7ozWPbppidBS4GRXqRuwPdD1OAT6DIx8yPWbRxnwrRfgkUaiqwnIwFfdS7N/VC2s30mwvpVYGt0DI3hYOAVIz0IPXpJK37Zrb6NLRvcOSuFkC6klFYCxcrZnY3iHhbkeR85PtPG+Hrk7nOBkr9vuOPhUruOfpNQ9nOjpXjfE1ele7q78KvdFhWy66tV2qASMcwPSTKeK1/ns/wALUf8AbLOqyxuI1LClXJnE3DXWsu7a1jFd+S+0sSNxPMnpJ19j+ndOG1lvdtutcA55Kdig/LwsfrNT4lwum7tKunFCGhzWxQoQjKdGHclP1aTDXp0rVQAFStRyGAq1qMnHoAAZz1eXdK1155dYa8zLXNFX49cTyFmrdh8AtFFf7UP6S04vqKdNW2ou2hasOM48Vg5qqD8x8pfdn0JoRyCDcX1BD+8pvta0KfluA+kse1V9WlpfWPWjPQhWsuASLHPhCZyAcjP92Tecmm/irnzU3F2Zz1Zi5+bHJnlPpmzz8zz+s+Z7SEiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAkneyftWtR+w3OFrdi9TMeS2N1QnyDeXx+cjNVzyxzPp5mTV2C4J9gQ1X1IuovIuR2VSGTu1xSHI5WIQxK9TuyM4OJ+pmvZqWmKJ7uEk06Vb6nrsXKWKUYEdUYEETz4Jq2QjR3sftFa+Bm/1qheS2qfN8Y3r1B9QQZgT290Ok1C6O5yrkZZyPuqmPRLD1BPXOOXnNp1mio1da7gHXO9HRvEjeT02qcq3xB+c8rU1jVo4lRM7nhqHHeyaVcT0fFKrWRrtTXTbWB4bS6t49wPL3BkYIJ5/PcNPxVX1NmkCvvqrquY8thW1mAA55yNpzymK4vQ9a6FHuNpGvpw7qocrtswH28i3XngT64b/O2s/wB00n/MvmtvlXc86j9s44lguwnZAVXXcTutNmo1Js2bsnuqTYVA3E5ZiqgfAchMxx6z7SW0NfNTj7S4PKrTnm1P9pYPDj8Kkk+QPvpNJZbp9OF1DVJs8fdqO9YbuQW0nwfiBIGefIjEuFpp0tXIJXSgLEs2EBPvM7k82PmxyTOL33fc8z6d0jj7PB68HA6dAAPQch8hIT9q/apdXaumqbNGnJJII22XnkWGOqj3R9ZLXBO0el4j9oXTt3gpbYwdeTq6+8q9ShwRkgdPjIu9q/AKUfvtJQq11AJf3IAqS1mbaNo5AgDnjpkes26SIrk+Ucvmad14RtKSspPVSkREBERAREQEREBERAREQEREBERAREQEREBERAREQM52M1dNOs09l65rVwefuq34XYeYU4OPhOiO5rtQpYquj9Q4Vlb0PPkfUH9Jy6BJu7LcLv0enrGo1GqwyK6NQ7uulO0lqLdL4g/qCEb6YkXV496nfLfDbXGmE9pXs7NSvr9LuaseK2tmZnT/AOxGOSyeoJyPiOmjcC7U6zQ/+31ViL12bs1Nn81TZUn44zJW7d9qX0ukda9bp7HuzUEWhxcKnByWU2nZgeZXqekhBhNen7rU1flxfUW+KWuzHtH1XEdXodLfXVg6muzdWrKwKK3LGSD1Mkzhh/8AVdZ/uuj/AH75z/7L/wCddD/bD90zoDh4xxLWNj/V9IP074ybqaxWdRHr9vtOUUcT9q+soL6WqqlRQz0BnVnZgrsA2CcA/QzRONdotXrTnUamy3zCs33YP9WsYVfoJbcabdqNQfW2w/rYZb6azYyuOqsGGemQc8xLaY6V5iOWczKW/Z52IehftF9liPauO6pttT7sgEC9kI3Z/JnHqfKbnrqdPXTYliomlVCHUKorWo9QFAwPh8ZidD2j7+uqw6vRVd8oswGd7T13qKWK+IHP5sek1T2i6fV26c2rfe+kRl3JeoWx22c79gRStedq7SBg88Ac5581vkyfKdKd1rXiEYWgZO33c8s9dvln/KecrKT1EpERAREQEREBERAREQEREBERAREQEREBERAREQEREDI8Avrr1OmstGaq7q3cYzmtbAW5efLMnbj4us7i2ixe7q77VtcCG27KSK+6X8bt3j4zyBHPoBOeczaeyXbnU8PwgxZQDnu3/D692/VflzHwmGbFNpi1fMNKWiOJSvw3tFZp009OvFYBoFjjUsGtqqWs+K+xshrbW5JXy5IefPEsuO9h+Ga/K6c16XWlBd3auAwDKGHfabcTX1GdvTMueEdruE8SZRa32e17arrFsIVdQ1BPdI9p5MoJyFyuSPmDlNDwWzTst97VmrSG/Vb6d76jV3XZzZYNo2YB91S2SeWAJJM9s75rP4aefuizsh2f1Oh4xoq9RSyHvwASPu3G1uaP0YSbdE2NdrCf9jph0OfdtP8AGazwftZYxa2x0tp7ttRtqRHbSWmxVo0osXIe5lySvUEHoByvNP2opcrYtNve6hac7UQli+nNtNTMW94qeuMDPMz5mm953MevRWtY9oU4b2Y1PEdVctFeVFr7rG5VVjeebN6/DqZv54NwnhqKO6TU3HK778tWWrtrW1NmdqOA4IUr5jnzmc03GLXpr1VIrTTVFjZSN9aFjjaveCg946+JWRQBuYDdy533F6NEAmv1WKd9JrtW0472u2sZqdPOweHxKN3L5Y7vltMxFvH0grWPTAcV4rqqWPd1rsqD7q6QiOtmk1Y7zCgZKvW9RK55K4xMro6q6rOIrav8k373turZA4sZ99bMw+8Cj3WHkwHlNT4z7Uqayw0elDEncbLgQGfaq7io8TZCqObDO0ZzI/472n1etP395ZR0QYWtefki4H1OT8Z1GG1/Wo/L5N4j3tjdYE3v3ZJr3HaW94pk7cj1xieEqTKS5gREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQKgzauyvb3W8PKrXbvpH9Fbkpj+oeqH4iapE5tWLRqYfYmY8J44f2t4fxZVqsXu7sOFQkgrY67TZVjwtYOeGI3AEzLUcCpFyahPC9Rp2MFr3qlOn7k17z+FlxkSE/Z9/OOj/ALUfumTdpbMW6oM/lUBny/kvQf8AnWefmpNLdtZ4/tRjmJjcw03jnbjR6F7Toq1t1TMx7zcxoqLkF+7GccyMkJgE8yTIx4zxi/Vv3t9zWNzxuPJc+Sr0A+UsJSXY8VaePP1YWvMq5lIiaOSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIGc7Ftt1umPpZ/AyUBr8HWdPdUdT/APF8pDeh1bUulqHDIQwz0yPWbZxztUr0AVgB7RhhjnUMYIz6+QPpJs2ObWjTaloiJaZKSuZSUsSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAlcykQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
              alt="Founder"
            />
            <Typography>Gurjot Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Gurjot Singh.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/gurjot-singh-a226ab242/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/gurjot-singh-a226ab242/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;