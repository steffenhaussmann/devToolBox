import { Component } from '@angular/core';
import { FeatureButtonComponent } from '../../common/components/buttons/feature-button/feature-button.component';
import { FeatureButton } from '../../common/models/feature-button.model';
import {
  AlignCenterHorizontal,
  Clock,
  Code,
  Code2,
  Codepen,
  Database,
  File,
  FileCode,
  FileJson,
  GitCompare,
  Globe,
  Layout,
  LockOpen,
  Minimize,
  Repeat,
  Shuffle,
  Sliders,
  SlidersHorizontal,
  Table,
  Type,
  WandSparkles,
  Zap,
} from 'lucide-angular';

@Component({
  selector: 'app-formatter',
  standalone: true,
  imports: [FeatureButtonComponent],
  templateUrl: './formatter.component.html',
  styleUrl: './formatter.component.scss',
})
export class FormatterComponent {
  readonly featureList: FeatureButton[] = [
    {
      name: 'JSON Formatter',
      icon: Code2,
      shortDescription:
        'Formatiert und validiert JSON-Daten. Stellt die Daten in einer gut lesbaren Struktur dar und hebt Syntaxfehler hervor.',
      description: '',
    },
    {
      name: 'XML Formatter',
      icon: Codepen,
      shortDescription:
        'Formatiert XML-Daten und macht sie lesbar. Markiert ungültige Tags oder fehlerhafte Strukturen.',
      description: '',
    },
    {
      name: 'HTML Formatter',
      icon: Globe,
      shortDescription:
        'Bereinigt und strukturiert HTML-Code. Option zum Minifizieren oder Einrücken.',
      description: '',
    },
    {
      name: 'CSS Formatter',
      icon: SlidersHorizontal,
      shortDescription: 'Formatiert CSS-Code für Lesbarkeit oder minimiert ihn für die Produktion.',
      description: '',
    },
    {
      name: 'JavaScript/TypeScript Formatter',
      icon: Zap,
      shortDescription:
        'Beautifiziert oder minimiert JavaScript/TypeScript-Code. Zeigt Syntaxfehler an.',
      description: '',
    },
    {
      name: 'SQL Formatter',
      icon: Database,
      shortDescription:
        'Formatiert SQL-Abfragen und hebt Schlüsselwörter wie SELECT, FROM und WHERE hervor.',
      description: '',
    },
    {
      name: 'YAML Formatter',
      icon: FileJson,
      shortDescription:
        'Überprüft YAML-Daten auf Syntaxfehler und strukturiert sie für Lesbarkeit.',
      description: '',
    },
    {
      name: 'Markdown Formatter',
      icon: File,
      shortDescription: 'Bereinigt und formatiert Markdown-Dokumente, z. B. Titel und Listen.',
      description: '',
    },
    {
      name: 'CSV Formatter',
      icon: Table,
      shortDescription:
        'Wandelt CSV-Dateien in Tabellenansichten um. Kann Daten validieren und konvertieren.',
      description: '',
    },
    {
      name: 'Code Diff Viewer',
      icon: GitCompare,
      shortDescription: 'Vergleicht zwei Code-Snippets und hebt die Unterschiede hervor.',
      description: '',
    },
    {
      name: 'Text Normalizer',
      icon: AlignCenterHorizontal,
      shortDescription:
        'Entfernt unerwünschte Zeichen aus Text und konvertiert Groß-/Kleinschreibung.',
      description: '',
    },
    {
      name: 'Date Formatter',
      icon: Clock,
      shortDescription: 'Wandelt Datumsangaben zwischen Formaten wie YYYY-MM-DD und DD/MM/YYYY um.',
      description: '',
    },
    {
      name: 'Unit Converter',
      icon: Repeat,
      shortDescription: 'Konvertiert Maßeinheiten wie Zoll in cm oder kg in Pfund.',
      description: '',
    },
    {
      name: 'Minifier',
      icon: Minimize,
      shortDescription: 'Minimiert JavaScript, CSS oder HTML für Webanwendungen.',
      description: '',
    },
    {
      name: 'JSON to YAML Converter',
      icon: Shuffle,
      shortDescription:
        'Konvertiert JSON-Daten in YAML und umgekehrt, während die Struktur erhalten bleibt.',
      description: '',
    },
    {
      name: 'Unicode Formatter',
      icon: Type,
      shortDescription: 'Ersetzt Unicode-Zeichen oder wandelt sie in verständliche Strings um.',
      description: '',
    },
    {
      name: 'Text Encoder/Decoder',
      icon: LockOpen,
      shortDescription:
        'Kodiert oder dekodiert Text in Formaten wie Base64, URL-Encoding oder HTML-Entities.',
      description: '',
    },
    {
      name: 'Prettier Integration',
      icon: WandSparkles,
      shortDescription:
        'Führt Prettier-Formatierung für unterstützte Dateien direkt im Browser aus.',
      description: '',
    },
  ];
}
