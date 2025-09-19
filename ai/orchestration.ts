
import { TaskType } from '../types';
import { AGENT_CONFIGS } from './agents';
import { AIAgentCapabilities, AIAgentConfig } from './types';

// =====================================
// AI AGENT ORCHESTRATION SYSTEM
// =====================================

/**
 * @class AIAgentOrchestraManager
 * @description Advanced AI Agent Orchestra Manager that handles the lifecycle, collaboration, and performance of AI agents.
 * It uses a singleton pattern to ensure a single instance manages all agents.
 * @property {Map<TaskType, AIAgentConfig>} agents - A map of registered AI agents.
 * @property {Map<TaskType, Set<TaskType>>} collaborationGraph - A graph representing collaborations between agents.
 * @property {Map<TaskType, any>} performanceMetrics - A map to store performance metrics for each agent.
 * @property {Map<string, any[]>} episodicMemory - Stores recent interactions for episodic learning.
 * @property {Map<string, number[]>} semanticMemory - Stores vector embeddings for semantic understanding.
 * @property {Map<string, Function>} proceduralMemory - Stores functions or procedures that agents can execute.
 */
class AIAgentOrchestraManager {
  private static instance: AIAgentOrchestraManager;
  private agents: Map<TaskType, AIAgentConfig> = new Map();
  private collaborationGraph: Map<TaskType, Set<TaskType>> = new Map();
  private performanceMetrics: Map<TaskType, any> = new Map();
  
  // Advanced AI Memory System
  private episodicMemory: Map<string, any[]> = new Map();
  private semanticMemory: Map<string, number[]> = new Map(); // Vector embeddings
  private proceduralMemory: Map<string, Function> = new Map();
  
  private constructor() {
    this.initializeAgentOrchestra();
    this.buildCollaborationGraph();
    this.initializeMetaLearning();
  }

  /**
   * @description Gets the singleton instance of the AIAgentOrchestraManager.
   * @returns {AIAgentOrchestraManager} The singleton instance.
   */
  public static getInstance(): AIAgentOrchestraManager {
    if (!AIAgentOrchestraManager.instance) {
      AIAgentOrchestraManager.instance = new AIAgentOrchestraManager();
    }
    return AIAgentOrchestraManager.instance;
  }

  /**
   * @description Initializes the AI Agent Orchestra by registering all agent configurations.
   * @private
   */
  private initializeAgentOrchestra(): void {
    AGENT_CONFIGS.forEach(config => {
      this.agents.set(config.id, config);
    });
  }

  /**
   * @description Builds the collaboration graph to define relationships between agents for efficient orchestration.
   * @private
   */
  private buildCollaborationGraph(): void {
    this.agents.forEach((agent, agentId) => {
      const collaborators = new Set<TaskType>();
      
      // Direct collaborations
      agent.collaboratesWith.forEach(collaboratorId => {
        collaborators.add(collaboratorId);
      });
      
      // Dependencies
      agent.dependsOn.forEach(dependencyId => {
        collaborators.add(dependencyId);
      });
      
      // Enhanced agents
      agent.enhances.forEach(enhancedId => {
        collaborators.add(enhancedId);
      });
      
      this.collaborationGraph.set(agentId, collaborators);
    });
  }

  /**
   * @description Initializes meta-learning capabilities by setting up initial performance metrics for each agent.
   * @private
   */
  private initializeMetaLearning(): void {
    // Initialize learning algorithms and performance tracking
    this.agents.forEach((agent, agentId) => {
      this.performanceMetrics.set(agentId, {
        successRate: agent.capabilities.accuracyLevel,
        averageExecutionTime: 0,
        resourceUsage: agent.capabilities.resourceIntensity,
        userSatisfactionScore: 0.85,
        adaptationRate: agent.capabilities.adaptiveLearning ? 0.1 : 0.0
      });
    });
  }

  /**
   * @description Gets the enhanced task description for a given task type, including AI capabilities.
   * @param {TaskType} taskType - The type of the task.
   * @returns {string} The enhanced description.
   */
  public getEnhancedDescription(taskType: TaskType): string {
    const agent = this.agents.get(taskType);
    return agent ? agent.description : `وصف غير متوفر للمهمة: ${taskType}`;
  }

  /**
   * @description Gets the capabilities of the agent assigned to a specific task.
   * @param {TaskType} taskType - The type of the task.
   * @returns {AIAgentCapabilities | null} The agent's capabilities or null if not found.
   */
  public getAgentCapabilities(taskType: TaskType): AIAgentCapabilities | null {
    const agent = this.agents.get(taskType);
    return agent ? agent.capabilities : null;
  }

  /**
   * @description Gets collaboration suggestions for a given task type.
   * @param {TaskType} taskType - The type of the task.
   * @returns {TaskType[]} An array of suggested collaborator task types.
   */
  public getCollaborationSuggestions(taskType: TaskType): TaskType[] {
    const collaborators = this.collaborationGraph.get(taskType);
    return collaborators ? Array.from(collaborators) : [];
  }

  /**
   * @description Optimizes the execution order of tasks based on their dependencies.
   * @param {TaskType[]} taskTypes - An array of task types to be executed.
   * @returns {TaskType[]} The optimized order of task types.
   */
  public optimizeExecutionOrder(taskTypes: TaskType[]): TaskType[] {
    const visited = new Set<TaskType>();
    const result: TaskType[] = [];
    
    const dfs = (taskType: TaskType) => {
      if (visited.has(taskType)) return;
      visited.add(taskType);
      
      const agent = this.agents.get(taskType);
      if (agent) {
        // Process dependencies first
        agent.dependsOn.forEach(dep => dfs(dep));
        result.push(taskType);
      }
    };
    
    taskTypes.forEach(taskType => dfs(taskType));
    return result;
  }

  /**
   * @description Gets the performance metrics for a specific agent.
   * @param {TaskType} taskType - The type of the task.
   * @returns {any} The performance metrics.
   */
  public getPerformanceMetrics(taskType: TaskType): any {
    return this.performanceMetrics.get(taskType);
  }

  /**
   * @description Updates the performance metrics of an agent based on execution results.
   * @param {TaskType} taskType - The type of the task.
   * @param {number} executionTime - The time taken to execute the task.
   * @param {boolean} success - Whether the task execution was successful.
   * @param {number} [userRating] - An optional user rating for the task outcome.
   */
  public updatePerformance(
    taskType: TaskType, 
    executionTime: number, 
    success: boolean, 
    userRating?: number
  ): void {
    const metrics = this.performanceMetrics.get(taskType);
    if (metrics) {
      // Update metrics using exponential moving average
      metrics.averageExecutionTime = 0.8 * metrics.averageExecutionTime + 0.2 * executionTime;
      metrics.successRate = 0.9 * metrics.successRate + 0.1 * (success ? 1 : 0);
      
      if (userRating !== undefined) {
        metrics.userSatisfactionScore = 0.8 * metrics.userSatisfactionScore + 0.2 * userRating;
      }
      
      this.performanceMetrics.set(taskType, metrics);
    }
  }

  /**
   * @description Gets a read-only map of all registered agent configurations.
   * @returns {ReadonlyMap<TaskType, AIAgentConfig>} A map of all agents.
   */
  public getAllAgents(): ReadonlyMap<TaskType, AIAgentConfig> {
    return new Map(this.agents);
  }

  /**
   * @description Stores an episode in the episodic memory for a specific task type, facilitating learning.
   * @param {TaskType} taskType - The type of the task.
   * @param {any} episode - The episode data to store.
   */
  public storeEpisode(taskType: TaskType, episode: any): void {
    const episodes = this.episodicMemory.get(taskType) || [];
    episodes.push(episode);
    
    // Keep only recent episodes (memory management)
    if (episodes.length > 100) {
      episodes.splice(0, episodes.length - 100);
    }
    
    this.episodicMemory.set(taskType, episodes);
  }

  /**
   * @description Retrieves relevant episodes from memory for learning purposes.
   * @param {TaskType} taskType - The type of the task.
   * @param {number} [limit=10] - The maximum number of episodes to retrieve.
   * @returns {any[]} An array of relevant episodes.
   */
  public getRelevantEpisodes(taskType: TaskType, limit: number = 10): any[] {
    const episodes = this.episodicMemory.get(taskType) || [];
    return episodes.slice(-limit);
  }
}

/**
 * @description Singleton instance of the AI Agent Orchestra Manager.
 */
export const aiAgentOrchestra = AIAgentOrchestraManager.getInstance();

/**
 * @description A frozen object containing enhanced task descriptions with AI Agent capabilities.
 */
export const ENHANCED_TASK_DESCRIPTIONS = Object.freeze(
  Object.fromEntries(
    Array.from(aiAgentOrchestra.getAllAgents().entries()).map(([taskType, agent]) => [
      taskType,
      agent.description
    ])
  )
);

// =====================================
// PERFORMANCE MONITORING UTILITIES
// =====================================

/**
 * @class AIAgentMonitor
 * @description Provides real-time performance monitoring for AI agents.
 * It uses a singleton pattern to ensure a single instance monitors all agents.
 * @property {Map<string, any[]>} performanceLog - A map to store performance logs for each agent.
 */
export class AIAgentMonitor {
  private static instance: AIAgentMonitor;
  private performanceLog: Map<string, any[]> = new Map();
  
  private constructor() {}
  
  /**
   * @description Gets the singleton instance of the AIAgentMonitor.
   * @returns {AIAgentMonitor} The singleton instance.
   */
  public static getInstance(): AIAgentMonitor {
    if (!AIAgentMonitor.instance) {
      AIAgentMonitor.instance = new AIAgentMonitor();
    }
    return AIAgentMonitor.instance;
  }
  
  /**
   * @description Logs the performance of an agent with advanced metrics.
   * @param {TaskType} taskType - The type of the task.
   * @param {object} metrics - The performance metrics to log.
   * @param {number} metrics.executionTime - The time taken to execute the task.
   * @param {number} metrics.accuracy - The accuracy of the task outcome.
   * @param {number} metrics.resourceUsage - The resources used during execution.
   * @param {number} [metrics.memoryUsage] - Optional memory usage metric.
   * @param {number} [metrics.cacheHitRate] - Optional cache hit rate metric.
   */
  public logPerformance(
    taskType: TaskType, 
    metrics: {
      executionTime: number;
      accuracy: number;
      resourceUsage: number;
      memoryUsage?: number;
      cacheHitRate?: number;
    }
  ): void {
    const key = `${taskType}_${Date.now()}`;
    const logs = this.performanceLog.get(taskType) || [];
    
    logs.push({
      timestamp: Date.now(),
      ...metrics
    });
    
    // Keep only last 50 logs per task
    if (logs.length > 50) {
      logs.splice(0, logs.length - 50);
    }
    
    this.performanceLog.set(taskType, logs);
  }
  
  /**
   * @description Gets performance analytics for a specific task type.
   * @param {TaskType} taskType - The type of the task.
   * @returns {any | null} An object with performance analytics or null if no logs are available.
   */
  public getAnalytics(taskType: TaskType): any {
    const logs = this.performanceLog.get(taskType) || [];
    if (logs.length === 0) return null;
    
    const metrics = {
      averageExecutionTime: logs.reduce((sum, log) => sum + log.executionTime, 0) / logs.length,
      averageAccuracy: logs.reduce((sum, log) => sum + log.accuracy, 0) / logs.length,
      averageResourceUsage: logs.reduce((sum, log) => sum + log.resourceUsage, 0) / logs.length,
      trendDirection: this.calculateTrend(logs.map(log => log.executionTime)),
      totalExecutions: logs.length
    };
    
    return metrics;
  }
  
  /**
   * @description Calculates the performance trend based on a series of values.
   * @param {number[]} values - An array of performance values.
   * @returns {'improving' | 'stable' | 'declining'} The calculated trend.
   * @private
   */
  private calculateTrend(values: number[]): 'improving' | 'stable' | 'declining' {
    if (values.length < 3) return 'stable';
    
    const recent = values.slice(-5).reduce((sum, val) => sum + val, 0) / Math.min(5, values.length);
    const older = values.slice(0, -5).reduce((sum, val) => sum + val, 0) / Math.max(1, values.length - 5);
    
    const improvement = (older - recent) / older;
    
    if (improvement > 0.1) return 'improving';
    if (improvement < -0.1) return 'declining';
    return 'stable';
  }
}

/**
 * @description AI Agent performance monitor singleton.
 */
export const aiAgentMonitor = AIAgentMonitor.getInstance();

// =====================================
// UTILITY FUNCTIONS & EXPORTS
// =====================================

/**
 * @description Gets a summary of an agent's capabilities for UI display.
 * @param {TaskType} taskType - The type of the task.
 * @returns {string} A summary of the agent's capabilities.
 */
export const getAgentCapabilitySummary = (taskType: TaskType): string => {
  const capabilities = aiAgentOrchestra.getAgentCapabilities(taskType);
  if (!capabilities) return "قدرات غير محددة";
  
  const features = [];
  if (capabilities.multiModal) features.push("متعدد الوسائط");
  if (capabilities.reasoningChains) features.push("سلاسل التفكير");
  if (capabilities.ragEnabled) features.push("تعزيز البحث");
  if (capabilities.agentOrchestration) features.push("تنسيق الوكلاء");
  if (capabilities.metacognitive) features.push("ما وراء المعرفة");
  
  return features.join(" • ");
};

/**
 * @description Checks if a task requires collaboration with other agents.
 * @param {TaskType} taskType - The type of the task.
 * @returns {boolean} True if collaboration is required, false otherwise.
 */
export const requiresCollaboration = (taskType: TaskType): boolean => {
  const suggestions = aiAgentOrchestra.getCollaborationSuggestions(taskType);
  return suggestions.length > 0;
};

/**
 * @description Gets optimization suggestions for task execution, including order and parallelization.
 * @param {TaskType[]} taskTypes - An array of task types to be executed.
 * @returns {{order: TaskType[], parallelizable: TaskType[], sequential: TaskType[]}} An object with optimization suggestions.
 */
export const getOptimizationSuggestions = (taskTypes: TaskType[]): {
  order: TaskType[];
  parallelizable: TaskType[];
  sequential: TaskType[];
} => {
  const optimizedOrder = aiAgentOrchestra.optimizeExecutionOrder(taskTypes);
  
  const parallelizable = taskTypes.filter(taskType => {
    const agent = aiAgentOrchestra.getAllAgents().get(taskType);
    return agent?.parallelizable || false;
  });
  
  const sequential = taskTypes.filter(taskType => {
    const agent = aiAgentOrchestra.getAllAgents().get(taskType);
    return !agent?.parallelizable;
  });
  
  return {
    order: optimizedOrder,
    parallelizable,
    sequential
  };
};

/**
 * @description Gets the caching strategy for a specific task type.
 * @param {TaskType} taskType - The type of the task.
 * @returns {string} The caching strategy.
 */
export const getCacheStrategy = (taskType: TaskType): string => {
  const agent = aiAgentOrchestra.getAllAgents().get(taskType);
  return agent?.cacheStrategy || 'none';
};

/**
 * @description Gets the confidence threshold for quality assurance of a task.
 * @param {TaskType} taskType - The type of the task.
 * @returns {number} The confidence threshold.
 */
export const getConfidenceThreshold = (taskType: TaskType): number => {
  const agent = aiAgentOrchestra.getAllAgents().get(taskType);
  return agent?.confidenceThreshold || 0.8;
};

/**
 * @description Development utilities for the AI Agent Orchestra, available only in development mode.
 */
export const AI_AGENT_DEV_UTILS = process.env.NODE_ENV === 'development' ? {
  /**
   * @description Validates the completeness of the agent configurations.
   * @returns {boolean} True if the configuration is valid, false otherwise.
   */
  validateAgentConfiguration: (): boolean => {
    console.group('🤖 AI Agent Orchestra Validation');
    
    const allTaskTypes = Object.values(TaskType);
    const configuredAgents = Array.from(aiAgentOrchestra.getAllAgents().keys());
    
    const missingAgents = allTaskTypes.filter(taskType => 
      !configuredAgents.includes(taskType)
    );
    
    const agentStats = {
      total: configuredAgents.length,
      withRAG: 0,
      withMetacognition: 0,
      withOrchestration: 0,
      multiModal: 0,
      highComplexity: 0
    };
    
    configuredAgents.forEach(agentId => {
      const agent = aiAgentOrchestra.getAllAgents().get(agentId);
      if (agent) {
        if (agent.capabilities.ragEnabled) agentStats.withRAG++;
        if (agent.capabilities.metacognitive) agentStats.withMetacognition++;
        if (agent.capabilities.agentOrchestration) agentStats.withOrchestration++;
        if (agent.capabilities.multiModal) agentStats.multiModal++;
        if (agent.capabilities.complexityScore > 0.8) agentStats.highComplexity++;
      }
    });
    
    console.log('📊 Agent Statistics:', agentStats);
    console.log('❌ Missing Agents:', missingAgents);
    
    const isValid = missingAgents.length === 0;
    console.log(`✅ Agent Orchestra is ${isValid ? 'complete' : 'incomplete'}`);
    console.groupEnd();
    
    return isValid;
  },
  
  /**
   * @description Runs a performance benchmark simulation for all agents.
   */
  runPerformanceBenchmark: (): void => {
    console.group('⚡ AI Agent Performance Benchmark');
    
    const agents = aiAgentOrchestra.getAllAgents();
    const benchmarkResults: any[] = [];
    
    agents.forEach((agent, agentId) => {
      const performance = aiAgentOrchestra.getPerformanceMetrics(agentId);
      benchmarkResults.push({
        agent: agent.name,
        complexity: agent.capabilities.complexityScore,
        accuracy: agent.capabilities.accuracyLevel,
        speed: agent.capabilities.processingSpeed,
        resources: agent.capabilities.resourceIntensity,
        cached: agent.cacheStrategy !== 'none'
      });
    });
    
    console.table(benchmarkResults);
    console.groupEnd();
  }
} : undefined;

// Validate configuration on module load in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    AI_AGENT_DEV_UTILS?.validateAgentConfiguration();
  }, 0);
}
