import { CatCharacteristicsService } from './cat-characteristics.service';

describe('CatCharacteristicsService', () => {
  it('should return a random cat', () => {
    const cat = new CatCharacteristicsService().getRandomCharacteristics();

    expect(cat.name).toBeInstanceOf(String);
    expect(cat.likesWater).toBeInstanceOf(Boolean);
    expect(cat.age).toBeInstanceOf(Number);
  });

  it('should not return the same cat two times in a row', () => {
    const service = new CatCharacteristicsService();
    let prevCat: any;

    for (let i = 0; i < 1000; i++) {
      const cat = service.getRandomCharacteristics();
      expect(cat).not.toEqual(prevCat);
      prevCat = cat;
    }
  });
});
