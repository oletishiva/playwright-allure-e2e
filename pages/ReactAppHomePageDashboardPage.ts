import { Page,Locator} from "@playwright/test";

export class ReactAppHomePageDashboardPage{

    private page:Page

    constructor(page:Page)
    {
        this.page=page
    }

    // ✅ Getters for lazy initialization (Better Performance)
  get iotDashboard(): Locator {
    return this.page.getByText("IoT Dashboard");
  }

  get forms(): Locator {
    return this.page.getByText("Forms");
  }

  get modalOverlays(): Locator {
    return this.page.getByText("Modal & Overlays");
  }

  get extraComponents(): Locator {
    return this.page.getByText("Extra Components");
  }

  get charts(): Locator {
    return this.page.getByText("text=Charts");
  }

  get tablesData(): Locator {
    return this.page.locator("text=Tables & Data"); //using xpath
  }

  get auth(): Locator {
    return this.page.locator("text=Auth"); //using Xpath
  }

  // ✅ Click methods
  async clickIOTDashboard() {
    await this.iotDashboard.click();
  }

  async clickForms() {
    await this.forms.click();
  }

  async clickModalOverlays() {
    await this.modalOverlays.click();
  }

  async clickExtraComponents() {
    await this.extraComponents.click();
  }

  async clickCharts() {
    await this.charts.click();
  }

  async clickTablesData() {
    await this.tablesData.click();
  }

  async clickAuth() {
    await this.auth.click();
  }
}