# ml4w-homework

## See Demos live:
- [Week1](https://yining1023.github.io/ml4w-homework/week1/) Image Classifier on Webcam

## How to push code to a Github Repo and host sketch on Github
Before we get started, you can also work on top of this [p5 sketch](https://editor.p5js.org/ml5/sketches/rJ-C5AQ5X) in p5 Web Editor for week 1. Since p5 Web Editor already hosts the sketch for you online, you don't need to host your sketch on Github. If you want to learn how to host your sketch on Github, please continue reading.  :)

Here is a video about [How to host p5 sketch on github pages](https://youtu.be/8HPYsDTk17A).

Here is a step by step guide about how to push code to a Github Repo and host sketch on Github
1. Login to Github: https://github.com, go to https://github.com/YOUR_USERNAME.

2. Click on the "+" on the top-right corner, dropdown - click on "New repository".
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/a.png" width="500">

3. Fill in the "Repository name", "Description", check the checkbox "Initialize this repository with a README", click on the "Create repository" button.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/b.png" width="500">

4. You will see a new repository page.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/c.png" width="500">

5. Put your `sketch.js` and `index.html` file into a folder called `week1`, and drag the folder into the new repository page.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/d.png" width="500">
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/e.png" width="500">

6. Under the "Commit changes", type in commit message, like "added week 1", click on . "Commit changes" button.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/f.png" width="500">

7. You should be able to see a new folder `week1` listed on the repository page.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/g.png" width="400">

8. Go to right top corner, click on "Settings", you will be on https://github.com/YOUR_USERNAME/ml4w-homework/settings
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/h.png" width="500">

9. Scroll down the page, find "Github Pages", click on "Source - None" dropdown, select "master branch".
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/i.png" width="500">

10. After 2 mins, refresh the page, you should be able to see a green bar saying: "Your site is published at https://YOUR_USERNAME.github.io/ml4w-homwork.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/j.png" width="500">

11. Go to that link: https://YOUR_USERNAME.github.io/ml4w-homwork, you will see the following page.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/k.png" width="400">

12. Add `/week1` at the end of the url(https://YOUR_USERNAME.github.io/ml4w-homwork/week1), you will see your week1 demo.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/l.png" width="500">

13. Go to this link: https://github.com/yining1023/machine-learning-for-the-web/wiki/Week-1--2019-Spring, click on the "Edit" button on the top-right corner.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/m.png" width="500">

14. Add your name, homework link and description at the end, click on "Save" button.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/n.png" width="500">

15. That's it!! You should be able to see your homework link on the page: https://github.com/YOUR_USERNAME/machine-learning-for-the-web/wiki/Week-1--2019-Spring.


## How to update your code and push it to Github
If you would like to update your code, you can follow these steps:
1. Make a new folder on your Desktop called "ml", open your terminal.

2. Type `cd `(cd and a space), drag the "ml" folder into the terminal window. You will see your command changes to: `cd /Users/YOUR_NAME/Desktop/ml`
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/o.png" width="500">
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/p.png" width="500">
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/q.png" width="500">

3. Hit `enter` or `return` on your keyboard. You will see in your terminal, you are at this path: `~/Desktop/ml`
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/s.png" width="500">

4. Go to the ml4w-homework github repo we created before: https://github.com/YOUR_USERNAME/ml4w-homework, click on the green "Clone or download" button, copy the link highlighted in green: https://github.com/YOUR_USERNAME/ml4w-homework.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/r.png" width="500">

5. In your terminal, type in `git clone `, with the link we just copied(git clone https://github.com/YOUR_USERNAME/ml4w-homework1.git). Hit enter.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/t.png" width="500">

6. In your terminal, type in `cd ml4w-homework`, hit enter.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/u.png" width="500">

7. Go to the Desktop, open `ml` folder, open the `ml4w-homework` folder with your code editor. Edit the code, make some changes.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/v.png" width="500">

8. In the terminal, type in `python -m SimpleHTTPServer` or `python3 -m http.server` if you are using python 3. The terminal will say "Serving HTTP on 0.0.0.0 port 8000 ...".
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/x2.png" width="500">

9. Go to `localhost:8000/week1` in your browser, you will see your example.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/w.png" width="500">

10. You can change some code, refresh the web page to see the changes.

11. After you are happy with the result, go back to terminal, hit "control + c" key, to quit the server, 
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/x.png" width="500">

12. In the terminal, type `git status` to view your changes
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/y.png" width="500">

13. In the terminal, type `git add .` to add all your changes
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/z.png" width="500">

14. In the terminal, type `git commit -m "updated week1"` to add a commit message.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/z1.png" width="500">

15. In the terminal, type `git push origin master` to push the changes to `master` branch.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/z2.png" width="500">

16. Go to your github repo page: https://github.com/YOUR_USERNAME/ml4w-homework, you will see week1 is updated.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/z3.png" width="500">

17. After 5 mins, your public sketch (https://YOUR_USERNAME.github.io/ml4w-homwork/week1) will be updated with your new change too.
<img src="https://raw.githubusercontent.com/yining1023/ml4w-homework/master/images/z4.png" width="500">




