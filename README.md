# 정렬 알고리즘 직접 구현하기

## 퀵 정렬

기준이 되는 `pivot`을 임의로 뽑아 `pivot`보다 작으면 왼쪽에, 크면 오른쪽에 위치시킨다.
쪼개진 왼쪽, 오른쪽에 대해서도 임의로 `pivot`을 뽑아 같은 방법으로 정렬한다. 이를 반복

시간 복잡도 : O(NlogN)

### 구현 방식

1. quickSort
   `pivot`보다 작은 값들을 가지는 배열 `before`와 크거나 같은 값들을 가지는 배열 `after`을 만들었다.

2. quickSortInPlace
   `before`, `after` 배열을 추가하지 않고, 주어진 배열에서 위치를 바꾸는 방식으로 구현했다.

   2-1. 맨 앞의 값을 pivot으로 한다. `low`는 인덱스 1을 가리키고 `high`는 마지막 인덱스를 가리킨다.
   2-2. `array[low]`의 값이 `pivot`보다 큰 값이 나올 때까지 low + 1 한다.
   2-3. `array[high]`의 값이 `pivot`보다 작은 값이 나올 때까지 high - 1 한다.
   2-4. `array[low]`와 `array[high]`의 값을 바꾼다. low가 high를 넘기 전까지 반복
   2-5. `low > high`가 되면 반복을 멈추고, `array[start]`와 `array[high]`의 위치를 바꾼다. 이로써 pivot값을 기준으로 앞에는 작은 값들이 뒤에는 크거나 같은 값들이 위치하게 된다. pivot 앞과 뒤 배열을 기준으로 위 과정을 반복한다.
