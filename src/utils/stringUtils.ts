export class StringUtils {
  private static bindingParticles = ["de", "da", "do", "das", "dos"];

  private static capitalizeFirstCharacter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static capitalizeFirstCharacterInName(name: string): string {
    return name
      .trim()
      .split(" ")
      .map((word) =>
        this.bindingParticles.includes(word)
          ? word
          : this.capitalizeFirstCharacter(word)
      )
      .join(" ");
  }

  static capitalizeFirstCharacterInText(text: string): string {
    return this.capitalizeFirstCharacter(text);
  }

  static getRemaingDays = (finalDate: string) => {
    const currentDateObject = new Date();

    const finalDateObject = new Date(finalDate);

    finalDateObject.setUTCHours(finalDateObject.getUTCHours() + 3);

    const dateDiff = finalDateObject.getTime() - currentDateObject.getTime();

    const daysRemaining = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    if (daysRemaining <= 0) {
      return "Nenhum dia";
    }

    if (daysRemaining < 1) {
      const hoursRemaining = Math.floor(dateDiff / (1000 * 60 * 60));
      return `${hoursRemaining} horas`;
    } else if (daysRemaining === 1) {
      return `${daysRemaining} dia`;
    } else {
      return `${daysRemaining} dias`;
    }
  };
}
