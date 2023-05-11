import { ElectricGroup } from '../electricGroup/ElectricGroup';

class Script {
  private readonly lightsFloor0 = ['0-01L', '0-02L', '0-03L', '0-04L', '0-05L', '0-06L', '0-07L', '0-08L'];
  private readonly lightsFloor1 = ['1-01L', '1-02L', '1-03L', '1-04L', '1-05L', '1-06L', '1-07L', '1-08L'];
  private readonly lightsFloor2 = ['2-01L', '2-02L', '2-03L', '2-04L', '2-05L', '2-06L', '2-07L', '2-08L'];
  private readonly lightsGarden = ['0-01L', '0-02L', '0-03L', '0-04L', '0-05L', '0-06L', '0-07L', '0-08L'];
  private readonly lightsAllHome = [...this.lightsFloor0, ...this.lightsFloor1, ...this.lightsFloor2];
  private readonly lightsAll = [...this.lightsFloor0, ...this.lightsFloor1, ...this.lightsFloor2, ...this.lightsGarden];

  public lightAllOn(): void {
    ElectricGroup.on(this.lightsAll);
  }
  
  public lightAllOff(): void {
    ElectricGroup.off(this.lightsAll);
  }

  public lightAllHomeOn(): void {
    ElectricGroup.on(this.lightsAllHome);
  }

  public lightAllHomeOff(): void {
    ElectricGroup.off(this.lightsAllHome);
  }

  public lightFloor0On(): void {
    ElectricGroup.on(this.lightsFloor0);
  }

  public lightFloor0Off(): void {
    ElectricGroup.off(this.lightsFloor0);
  }

  public lightFloor1On(): void {
    ElectricGroup.on(this.lightsFloor1);
  }

  public lightFloor1Off(): void {
    ElectricGroup.off(this.lightsFloor1);
  }

  public lightFloor2On(): void {
    ElectricGroup.on(this.lightsFloor2);
  }

  public lightFloor2Off(): void {
    ElectricGroup.off(this.lightsFloor2);
  }

  public lightGardenOn(): void {
    ElectricGroup.on(this.lightsGarden);
  }

  public lightGardenOff(): void {
    ElectricGroup.off(this.lightsGarden);
  }
}
const script = new Script();

export {script};
