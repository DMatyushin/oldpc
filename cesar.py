alphabet = "abcdefghijklmnopqrstuvwxyz"

#inp = "doomsday"

inp = input("Введите текст: ")

key = int(input("Введите ключ: "))

#key = 10

out = ""

decode = ""


for char in inp:
    i = 0
    index = alphabet.index(char) + key
    if index > 25:
        j = index - 25
        while True:
            j = j - 1
            if j <= 0:
                break
            i = i + 1
            

            if i == 26:
                i = 0
                continue
            

            #print("i = ", i, " j = ", j)
    else:
        i = index
    tmp = ""
    tmp = alphabet[i]
    out = out + tmp


""" for char in out:
    j = key
    index = alphabet.index(char) - key
    print("index ", char, alphabet.index(char), index)
    k = 25
    if index < 0:
        k = k - index
        print(k)
        while True:
    
            j = j - 1
            
            if j == 0:
                break
            k = k - 1
            if k < 0:
                k = 25
                continue

            print("char = ", char, " j = ", j, " k = ", k)
            print(alphabet[k])
    else:
        k = alphabet.index(char) - key """
for char in out:
    index = alphabet.index(char) - key
    i = index
    if index < 0:
        i = 26 + index
    tmp = ""
    tmp = alphabet[i]
    decode = decode + tmp

print("Raw data: ", inp)
print("Encoded: ", out)
print("decoded: ", decode)
