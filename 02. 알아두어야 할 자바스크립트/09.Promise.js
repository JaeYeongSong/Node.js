const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

// 다른 코드가 들어갈 수 있음

// Promise Basic
promise
    .then(value => {
        console.log(value); // 성공(resolve)한 경우 실행
    })
    .catch(error => {
        console.error(error); // 실패(reject)한 경우 실행
    })
    .finally(() => { // 끝나고 무조건 실행
        console.log('무조건');
    });

// Promise then return
promise
    .then(value => {
        return new Promise((resolve, reject) => {
            resolve(value);
        });
    })
    .then(value2 => {
        console.log(value2);
        return new Promise((resolve, reject) => {
            resolve(value2);
        });
    })
    .then(value3 => {
        console.log(value3);
    })
    .catch(error => {
        console.error(error);
    });

// Callback
function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫 번째 Callback
        if (err) {
            return console.error(err);
        }
        user.name = 'zero';
        user.save(err => { // 두 번째 Callback
            if (err) {
                return console.error(err);
            }
            Users.findOne({
                gender: 'm'
            }, (err, user) => { // 세 번째 Callback
                // Code
            });
        });
    });
}

// Callback to Promise
function findAndSaveUser(Users) {
    Users.findOne({})
        .then(user => {
            user.name = 'zero';
            return user.save();
        })
        .then(user => {
            return Users.findOne({
                gender: 'm'
            });
        })
        .then(user => {
            // Code
        })
        .catch(err => {
            console.error(err);
        });
}

// Promise simultaneous start
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then(value => {
        console.log(value); // ['성공1', '성공2'];
    })
    .catch(err => {
        console.error(err);
    });

// 개인적으로 Promise 연습
const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
})
promise
    .then(() => {
        console.log('성공!')
    })
    .catch(err => {
        console.error(err)
    })