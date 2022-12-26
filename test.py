# 1번
list = [];
sum = 0;
for i in range(0, 4, 1):
    a = input('점수 입력');
    sum += int(a);

print('총점', sum, '평균', sum / 4);

# 2번
sum = 0;
for i in range(1, 10, 2):
    sum += i;
        
print("홀수의 합은 : ", sum);

# 3번
music = [];
while True:
    m = int(input('1: 검색, 2: 음악추가, 3: 종료'));
    if m == 1:
        a = input('가수 또는 노래제목을 입력하세요 : ');
        if a == "이승윤" or a == "폐허가된다해도":
            print(['이승윤', '폐허가된다해도']);
    elif m == 2:
        nameData = input('가수 이름을 입력하세요 : ');
        musicData = input('노래 이름을 입력하세요 : ');
        music.append(nameData);
        music.append(musicData);
        continue;
    elif m == 3:
        print('어플종료.');
        break;