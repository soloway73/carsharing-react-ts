export interface IRentalDuration {
  message: string;
  days: number;
  minutes: number;
}

export function formatTimeDifference(
  date1: string,
  date2: string
): IRentalDuration {
  // Преобразуем строки в объекты Date
  const firstDate: Date = new Date(date1);
  const secondDate: Date = new Date(date2);

  // Вычисляем разницу в миллисекундах
  const diffInMs = Math.abs(Number(secondDate) - Number(firstDate));

  // Конвертируем миллисекунды в минуты, часы и дни
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Определяем формат вывода
  if (diffInMinutes < 60) {
    // Если меньше часа, выводим только минуты
    return { message: `${diffInMinutes}м`, days: 1, minutes: diffInMinutes };
  } else if (diffInHours < 24) {
    // Если больше часа, но меньше суток, выводим часы и минуты
    const remainingMinutes = diffInMinutes % 60;
    return {
      message: `${diffInHours}ч ${remainingMinutes}м`,
      days: Math.ceil(diffInHours / 24),
      minutes: diffInMinutes,
    };
  } else {
    // Если больше суток, выводим дни и часы
    const remainingHours = diffInHours % 24;
    return {
      message: `${diffInDays}д ${remainingHours}ч`,
      days: diffInDays,
      minutes: diffInMinutes,
    };
  }
}
