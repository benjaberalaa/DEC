import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import rulesJsonData from '../../assets/Rules.json';
import {Router} from '@angular/router';
import { AuthService } from '../service/auth.service';

interface RuleModel {
  BodyHeader: any;
  Details: any[];
}

interface RuleType {
  EnteteDoc: string[];
  Models: {
    [modelKey: string]: RuleModel;
  };
}

interface RulesJson {
  rules: {
    [typeKey: string]: RuleType;
  };
}
declare const bootstrap: any;
const rulesJson: RulesJson = rulesJsonData as unknown as RulesJson;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit,OnDestroy{
  @Output() modelSelected = new EventEmitter<any>();
  currentDate: Date = new Date(); // Initialise avec la date actuelle

  isCollapsed: boolean = true;
  private intervalId: any;
  showParameter: boolean = false;
  showTable: boolean = false;
  decTypes: string[] = [];
  vucTypes: string[] = [];
  models: { [key: string]: string[] } = {};
  collapsedTypes: { [key: string]: boolean } = {};

  constructor(private router: Router, public authService: AuthService) {
    this.initializeData();
  }
    ngOnInit() {
      this.intervalId = setInterval(() => {
        this.currentDate = new Date();
      }, 1000);
        }

  ngOnDestroy(): void {
    // Nettoie l'intervalle pour éviter les fuites de mémoire
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private initializeData(): void {
    if (rulesJson && rulesJson.rules) {
      const allTypes = Object.keys(rulesJson.rules);
      
      this.vucTypes = allTypes.filter(type => type === 'VUC');
      this.decTypes = allTypes.filter(type => type !== 'VUC');

      allTypes.forEach((type) => {
        const models = rulesJson.rules[type]?.Models;
        this.models[type] = models ? Object.keys(models) : [];
        this.collapsedTypes[type] = true;
      });
    }
  }

  toggleCollapse(type: string): void {
    this.collapsedTypes[type] = !this.collapsedTypes[type];
  }

  selectModel(type: string, model: string): void {
    // Construire le type complet (ex: "TR_DON")
    const fullType = `${type}_${model}`.replace(/-/g, '_').toUpperCase();

    // Naviguer vers la route avec le type complet
    this.router.navigate(['/periods', fullType], {
      state: {
        type,
        model,
        enteteDoc: rulesJson.rules[type].EnteteDoc || [],
        modelAttributes: rulesJson.rules[type]?.Models?.[model]
      }
    });
  }
  // Ouvrir complètement la sidebar au survol
  handleMouseOver(): void {
    this.isCollapsed = false;
  }

  // Réduire la sidebar lorsque la souris quitte
  handleMouseOut(): void {
    this.isCollapsed = true;
  }
  onParametrageClick(): void {
    this.router.navigate(['/parametrage']); // Naviguez vers la route "parametrage"
  }

  onHistoryClick(): void {
    this.router.navigate(['/history']);
  }

  onUsersClick(): void {
    this.router.navigate(['/users']);
  }

  onSettingsClick(): void {
    this.router.navigate(['/settings']);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

