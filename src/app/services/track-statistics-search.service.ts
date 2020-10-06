import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrackStatisticsSearchService {
    constructor(
        private httpClient: HttpClient,
    ) {
    }

    public getTotalMatches(term: string) : Observable<TotalMatchesResponse> {
        var url = `https://cors-anywhere.herokuapp.com/https://audiojungle.net/shopfront-api/search?page=1&page_size=1&site=audiojungle.net&sort_by=relevance&term=${term}`;
    
        return this.httpClient.get<TotalMatchesResponse>(url);
    }

    public searchProfile(term: string, tags: string, pageNumber: number, pageSize: number) : Observable<TermSearchResult> {
    
        var url = `https://cors-anywhere.herokuapp.com/https://audiojungle.net/shopfront-api/search?page=${pageNumber}&page_size=${pageSize}&site=audiojungle.net&sort_by=relevance`;
    
        let params = new HttpParams();

        if (term){
            params = params.append('term', term);
        }

        if (tags && tags.length > 0){
            params = params.append('tags', tags);
        }

        return this.httpClient.get<TermSearchResult>(url, { params: params });
    }
}

export class TotalMatchesResponse {
    total_hits: number;
}

export class TermSearchResult{
    total_hits: number;
    matches: TrackSearchResult[];
}

export class TrackSearchResult{
    id: number;
    author_url: string;
    author_username: string;
    url: string;
    trending: boolean;
    classification: string;
    description: string;
    name: string;
    number_of_sales: number;
    price_cents: number;
    tags: string[];
}